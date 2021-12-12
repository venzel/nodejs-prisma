const geral = {
    envoriment: process.env.NODE_ENV || 'development',
    port: process.env.SERVER_PORT || 3001,
};

const { envoriment, port } = geral;

export default geral;
export { envoriment, port };
