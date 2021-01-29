module.exports = function(sequelize, DataTypes) {
    let Passwords = sequelize.define("Passwords", {
        name: {
            type: DataTypes.STRING,
            validate: {
                len: [50]
            }
        },
        link: {
            type: DataTypes.TEXT,
        },
        username: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
                len: [50]
            }
        },
        password: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
                len: [50]
            }
        },
        description: {
            type: DataTypes.TEXT,
        }        
    });

    return Passwords;
};