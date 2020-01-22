const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'products',
  password: 'postgres',
  port: 5432,
})

const getcategory = (request, response) => {
    pool.query('SELECT * FROM category ORDER BY cid ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }


const getcategoryById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM category WHERE cid = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
 
// const createkurtas = (request, response) => {
//   const { name, colours, material, price } = request.body
  
//   pool.query('INSERT INTO kurtass (name, colours, material, price ) VALUES ($1, $2,$3, $4)', 
//     [name, colours, material,price ], (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(201).send(`User added with ID`)
//     })
//   }

  const getproduct = (request, response) => {
    pool.query('SELECT * FROM product ORDER BY pid ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getproductById = (request, response) => {
    const id = request.query.id
  console.log(id)
    pool.query('SELECT * FROM product WHERE cid = $1 ', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  const getsubproductById = (request, response) => {
    const id= request.query.id
  console.log(id)
    pool.query('SELECT * FROM subproducts WHERE spid = $1 ', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  // const getcart = async(request, response) => {
  //   try {
  //     var list = await pool.query('SELECT * FROM subproducts left outer join cart on subproducts.spid=cart.spid');
  //     response.status(200).json(list)
  //   } catch (error) {
  //     response.status(400).json(error);
  //   }
    
  const getcart = (request, response) => {
    pool.query('SELECT * FROM subproducts left outer join cart on subproducts.spid=cart.spid', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  
  
  const createcart = (request, response) => {
    const { spid } = request.body
    console.log(spid);
    pool.query('INSERT INTO cart (spid ) VALUES ($1)', [spid], (error, results) => {
      if (error) {
        throw error
      }
   //  response.status(201).send(`User added with ID`)
   response.status(201).json({status:201, data:results.rows});
     })
  }
  
//   const updateUser = (request, response) => {
//     const id = parseInt(request.params.id)
//     const { name, email } = request.body
  
//     pool.query(
//       'UPDATE users SET name = $1, email = $2 WHERE id = $3',
//       [name, email, id],
//       (error, results) => {
//         if (error) {
//           throw error
//         }
//         response.status(200).send(`User modified with ID: ${id}`)
//       }
//     )
//   }
  
  const deletecart = (request, response) => {
    const id =request.query.id;
  
    pool.query('DELETE FROM cart WHERE cid = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  
  module.exports = {
    getcategory,
    getcategoryById,
    //    createkurtas,
    getproduct,
    getcart,
    createcart,
    getproductById,
    getsubproductById,
    // updateUser,
    deletecart
  }
  