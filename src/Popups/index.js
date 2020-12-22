const schoolsPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-envira" aria-hidden="true"></i><p class="title">Green Belt</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

 const schoolcatchmentsPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-list" aria-hidden="true"></i><p class="title">Air Quality Management Area</p>
  <p></p>
  <p class="info">Notes: ${feature.properties.notes}</p>

  </div>`
 
  layer.bindPopup(content)
 }

export {
  schoolsPopup,
  schoolcatchmentsPopup
}