const schoolsPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-graduation-cap smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">School</span>
  </div>
  <div class="smbc-map__item__body">
    <p>${feature.properties.name}</p>
  </div>
</div>`

  layer.bindPopup(content)
 }

 const schoolcatchmentsPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">School Catchments</span>
  </div>
  <div class="smbc-map__item__body">
  <p>${feature.properties.school_name}</p>
  </div>
</div>`
 
  layer.bindPopup(content)
 }

export {
  schoolsPopup,
  schoolcatchmentsPopup
}