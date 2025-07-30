const stuModel = require("../models/stuModel");

const homePage = (req, res) => {
  res.render("home");
};
const insertPage = (req, res) => {
  res.render("insert");
};
const displayPage = async (req, res) => {
  const Student = await stuModel.find();
  // res.render("display", { Data: Student });
  res.send(Student);
};

const updatePage = async (req, res) => {
  const Student = await stuModel.find();
  res.render("update", { Data: Student });
};

const dataDelete = async (req, res) => {
  const { id } = req.query;
  await stuModel.findByIdAndDelete(id);
  const Student = await stuModel.find();
  res.render("update", { Data: Student });
};

const editPage = async (req, res) => {
  const { id } = req.query;
  const Studata = await stuModel.findById(id);

  res.render("editdata", { Data: Studata });
};

const editSave = async (req, res) => {
  const { id, rollno, name, subject, fees } = req.body;
  await stuModel.findByIdAndUpdate(id, {
    rollno: rollno,
    name: name,
    subject: subject,
    fees: fees,
  });
  const Student = await stuModel.find();
  res.render("update", { Data: Student });
};

const stuSave = async (req, res) => {
  const { rno, nm, sub, fs } = req.body;
  const Student = await stuModel.create({
    rollno: rno,
    name: nm,
    subject: sub,
    fees: fs,
  });
  console.log(Student);

  res.render("insert");
};


const searchPage = async (req, res) => {
  const { rno } = req.query;
  let Student;

  if (rno) {
    Student = await stuModel.find({ rollno: rno });
  } else {
    Student = await stuModel.find();
  }

  res.render("search", { Data: Student });
};

module.exports = {
  homePage,
  insertPage,
  displayPage,
  stuSave,
  updatePage,
  dataDelete,
  editPage,
  editSave,
  searchPage,
};
