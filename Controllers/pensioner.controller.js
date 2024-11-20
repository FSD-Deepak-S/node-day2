const pensioner = [
  {
    id: 1,
    name: "Maragatham",
    age: 55,
  },
  {
    id: 2,
    name: "Deepak",
    age: 32,
  },
];

// get all data

export const getPensioner = (req, res) => {
  res
    .status(200)
    .json({ data: pensioner, message: "Pensioner Data received successfully" });
};

// get one data by id

export const getPensionerById = (req, res) => {
  const PensionerId = req.params.id;
  // console.log(PensionerId);

  const pensionerdet = pensioner.find((ele) => ele.id == PensionerId);

  if (!pensionerdet) {
    res.status(404).json({ message: "Pensioner Id not found" });
  }

  res
    .status(200)
    .json({
      data: pensionerdet,
      message: "Pensioner Detail Received Successfully",
    });
};

// create pensioner 

export const createPensioner = (req,res)=>{
    const {name,age} = req.body;
    const newPensioner = {
        id:pensioner.length+1,
        name:name,
        age:age
    }

    pensioner.push(newPensioner);

    res.status(200).json({message:"Pensioner Added Successfully",data:newPensioner})
}


export const updatePensioner = (req,res)=>{
    const pensionerId = req.params.id;
    const {name,age} = req.body;
    const index = pensioner.findIndex(ele=>ele.id == pensionerId)

    
    if (index === -1) {
       return res.status(404).json({message:"penisoner not found"})
    }

    pensioner[index].name = name;
    pensioner[index].age = age;

    res.status(200).json({
        message:"pensioner updated successfully",
        data:pensioner[index]
    })
}

export const deletePensioner = (req,res)=>{
    const pensionerId = req.params.id;
    const index = pensioner.findIndex(ele=>ele.id==pensionerId)

    if (index === -1) {
        return res.status(404).json({message:"penisoner not found"})
     }

    pensioner.splice(index,1)

    res.status(200).json({message:"Pensioner deleted successfully"})
}