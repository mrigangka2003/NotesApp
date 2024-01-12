/*GET/
HomePage
*/
exports.homepage = async (req, res) => {
  const locals = {
    title: "Node JS Notes",
    description: "Free Node JS app",
  };

  res.render("index", {
    locals,
    layout: "../views/layouts/frontpage",
  });
};

/*GET/
About Page
*/
exports.about = async (req, res) => {
  const locals = {
    title: "Node JS Notes",
    description: "Free Node JS app",
  };

  res.render("about", locals);
};
