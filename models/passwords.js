module.exports = function(sequelize, DataTypes) {
    let Passwords = sequelize.define("Password", {
        name: {
            type: DataTypes.STRING,
            len: [1]
             
        },
        link: {
            type: DataTypes.TEXT,
        },
        username: {
            type: DataTypes.STRING,
            len: [1],
            allowNull: false,
            
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
             
        },
        description: {
            type: DataTypes.TEXT,
        }        
    });

    return Passwords;
};