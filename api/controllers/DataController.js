/**
 * DataController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  create(req, res) {
    Data.create({
      productName: req.param("productName"),
      qty: req.param("qty"),
    })
      .then(data => res.ok(data))
      .catch((err) => res.serverError(err));
  },

  find(req, res) {
    Data.find()
    .then(data => res.ok(data))
    .catch(err => res.serverError(err));

  },

  delete(req, res) {
    Data.destroy({
      id: req.params.id
    })
    .then (data => res.ok(data))
    .catch (err => res.serverError(err));
  },

  update(req, res) {
    let attributes = {};
    if(req.param('productName')){
      attributes.productName = req.param('productName');
    }
    if(req.param('qty')) {
      attributes.qty = req.param('qty');
    }
    Data.update({
      id: req.params.id
    })
    .then (data => res.ok(data[0]))
    .catch(err => res.serverError(err));
  }
};
