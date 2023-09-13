const { DataTypes } = require('sequelize');
const sequelize = require('./baseDeDatos.js');

const posts = sequelize.define('posts',{
    
    sTitulo: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    sPost: {
        type: DataTypes.STRING(1000),
        allowNull: false,
    },
    sLink: {
        type: DataTypes.STRING(300),
        allowNull: true,
    },
    dCreacion: {
        type: DataTypes.DATE(),
        allowNull: true,
    }    
}, {
    timestamps: false,
    freezeTableName: true , // ver si esto va
}
)

module.exports = posts;