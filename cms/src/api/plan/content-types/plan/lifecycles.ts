export default {
    async beforeCreate(event: any): Promise<void> {
        const { data } = event.params;
        event.params.data.dropdownText = data.productId + ' - ' + data.title;
    },
    async beforeUpdate(event: any): Promise<void> {
        const { data } = event.params;
        event.params.data.dropdownText = data.productId + ' - ' + data.title;
    },
};
