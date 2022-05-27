const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  //find all categories
  Category.findAll({
    attributes: ['id', 'category_name']
  })
  .then(categoryData => res.json(categoryData))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
});

router.get('/:id', (req, res) => {
  //get with category with the id in the request url
  Category.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'category_name']
  })
  .then(categoryData => {
    if (!categoryData) {
      res.status(404).json({message: 'No category with the given id number'});
      return;
    }
    res.json(categoryData);
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
});

router.post('/', (req, res) => {
  // create a new category
    Category.create({
        category_name: req.body.category_name
    })
    .then(categoryData => {
        res.json({
          message:'Category created!',
          data: categoryData
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(categoryData => {
    if (!categoryData[0]) {
      res.status(404).json({message: 'No category with the given id number'});
      return;
    }
    res.json({
      message: 'Category updated!',
      changes: categoryData
    })
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(categoryData => {
    if (!categoryData) {
      res.status(404).json({message: 'No category with the given id number'});
      return;
    }
    res.json({
      message: 'Category deleted!',
      changes: categoryData
    })
  })
});

module.exports = router;
