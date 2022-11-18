module.exports = (sequelize, DataTypes) => {
    const tasklist = sequelize.define("tasklist", {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            primaryKey: true
        },
        task: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
        {
            timestamps: false,
            freezeTableName: true,
        });
    return tasklist;
};   