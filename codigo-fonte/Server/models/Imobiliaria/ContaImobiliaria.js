

const ContaImobiliaria = bd.sequelize.define('conta_imobiliarias',{

    ID_CONTA_IMOBILIARIA:{
        type: bd.Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    NUMERO:{
        type: bd.Sequelize.STRING(15),
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
    AGENCIA:{
        type: bd.Sequelize.STRING(15), 
        allowNull:false

    },
    BANCO:{
        type: bd.Sequelize.INTEGER, 
        allowNull:false
    },
    DETALHES:{
        type: bd.Sequelize.STRING, 
        allowNull:true
    }

});
module.exports = ContaImobiliaria;
