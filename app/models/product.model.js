module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("products", {
        name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      category_id: {
        type: Sequelize.INTEGER,
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
  
    return Product;
  };