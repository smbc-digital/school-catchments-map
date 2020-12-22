const schoolsPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-graduation-cap" aria-hidden="true"></i><p class="title">School</p>
  <p class="info">${feature.properties.name}</p>
  </div>`
 
  layer.bindPopup(content)
 }

 const schoolcatchmentsPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-list" aria-hidden="true"></i><p class="title">School Catchments</p>
  <p class="info">${feature.properties.school_name}</p>

  </div>`
 
  layer.bindPopup(content)
 }

export {
  schoolsPopup,
  schoolcatchmentsPopup
}