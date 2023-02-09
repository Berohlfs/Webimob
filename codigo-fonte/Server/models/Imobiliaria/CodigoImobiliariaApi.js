
const CodigoImobiliariaApi = bd.sequelize.define('codigo_imobiliarias_api',{
    ID_COD:{
        type: bd.Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    SEGURADORA:{
        type: bd.Sequelize.STRING,
        allowNull: false,
    },
    ID_IMOBILIARIA:{
        type: bd.Sequelize.INTEGER,
        allowNull: false,
        primaryKey: false,
        references: {
            model: Imobiliaria,
            key: 'ID_IMOBILIARIA'
        }
    },
    PRODUTO:{
        type: bd.Sequelize.STRING, 
        allowNull:false
    },
    CODIGO:{
        type: bd.Sequelize.STRING,
        allowNull: false

    }

});
module.exports = CodigoImobiliariaApi;
