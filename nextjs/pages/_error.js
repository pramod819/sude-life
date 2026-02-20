function Error() {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '50px' }}>Server Not Available</h1>
            <hr />
            <p style={{ fontSize: '22px' }}>Please Try Again Later</p>
        </div>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode, namespacesRequired: ['error'] }
}

export default Error
