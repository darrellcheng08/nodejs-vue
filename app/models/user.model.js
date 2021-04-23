module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      api_token: {
        type: Sequelize.STRING(245),
        allowNull: true,
      },
      remember_token: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      created_by: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      created_at: { 
        type: Sequelize.DATE, 
        defaultValue: Sequelize.NOW 
      },
      updated_at: Sequelize.DATE,
      updated_by: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      delete_flag: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        comment: "0 = Existing \n 1 = Deleted"
      },
    }, 
    {
      timestamps: false
    }
  );
  
    return User;
  };