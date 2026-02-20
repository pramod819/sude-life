export default {
    "0 0 1 * * *": async ({ strapi }) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const tenders = await strapi.query('api::tender.tender').findMany({
            select: [
                'id',
                'rfp_number',
                'tender_status',
                'description',
                'issue_date',
                'submission_date',
            ],
            where: {
                published_at: {
                    $notNull: true,
                },
                submission_date: {
                    $gte: today,
                },
            },
            populate: {
                document: true,
            },
            orderBy: { order: 'asc' },
        });

        
        for (const tender of tenders) {
            const submissionDate = new Date(tender.submissionDate);
            submissionDate.setHours(0, 0, 0, 0);
            const diffTime = submissionDate.getTime() - today.getTime(); 
            const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
            let tender_status = "Upcoming";
            if (diffDays>3)
                tender_status = "Upcoming";
            else if(diffDays == 3)
                tender_status = "Active";
            else if(diffDays < 3)
                tender_status = "Closing soon";
        
            await strapi.db.query('api::tender.tender').update({
                where: { rfp_number: tender.rfpNumber },
                data: {
                    tenderStatus: tender_status,
                },
            });
        };

        await strapi.db.query('api::tender.tender').update({
            where: { submission_date: {
                    $lt: today,
                }, },
            data: {
                tenderStatus: "Closed",
            },
        });
    },
};