const express=require('express')
const router=express.Router();
const { handleTestimonialData } = require('../data/data');

router.get('/', (req, res) => {
    res.json(handleTestimonialData);
}); 

router.get('/:userId', (req, res) => {
  const { userId } = req.params;
  const userTestimonials = handleTestimonialData.filter(testimonial => testimonial.userId === userId);
  res.json(userTestimonials);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const updatedTestimonial = req.body;


  console.log(`Requested data to modify: ${JSON.stringify(updatedTestimonial)}`);

  try {

    const index = handleTestimonialData.findIndex(testimonial => testimonial.id === id);

    if (index !== -1) {
 
      handleTestimonialData[index] = { ...handleTestimonialData[index], ...updatedTestimonial };
      res.json(handleTestimonialData[index]);
    } else {
     
      res.status(404).json({ message: 'Testimonial not found' });
    }
  } catch (error) {
 
    console.error(`Error updating testimonial: ${error.message}`);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/', (req, res) => {
  const newTestimonial = req.body;
  const duplicate = handleTestimonialData.find(testimonial => testimonial.id === newTestimonial.id && testimonial.name === newTestimonial.name);
  
  if (duplicate) {
    return res.status(400).json({ message: 'Duplicate testimonial' });
  }
  const newId = handleTestimonialData.length + 1; 
  newTestimonial.id = newId.toString(); 
  handleTestimonialData.push(newTestimonial); 
  res.status(201).json(newTestimonial); 
});


router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = handleTestimonialData.findIndex(testimonial => testimonial.id === id);

    if (index !== -1) {
        handleTestimonialData.splice(index, 1); 
        res.status(200).json({ message: 'Testimonial deleted successfully' });
    } else {
        res.status(404).json({ message: 'Testimonial not found' });
    }
});
module.exports=router;