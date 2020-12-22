function getColor_schoolcatchments(d) {
    switch  (d) {   case 'Primary                                           '    :
                        return '#1f78b4'    
                    case 'Secondary                                         '    :
                        return '#33a02c'    
                    case 'Infant                                            '    :
                        return '#e31a1c'    
                    case 'Junior                                            '    :
                        return '#ff7f00'    
    }
}

function schoolcatchmentsStyle (feature) {
    return {
        color: getColor_schoolcatchments (feature.properties.school_type),
        weight: 1,
        opacity: 1,
        fillColor: getColor_schoolcatchments (feature.properties.school_type),
        fillOpacity: 0
    }
}

function getColor_schools(d) {
    switch  (d) {   case 'Primary'    :
                        return '#1f78b4'    
                    case 'Secondary'    :
                        return '#33a02c'    
                    case 'Infant'    :
                        return '#e31a1c'    
                    case 'Junior'    :
                        return '#ff7f00'    
}
    }
        
    function schoolsStyle (feature) {
    return {
        color: '#000',
        weight: 2,
        opacity: 1,
        fillColor: getColor_schools (feature.properties.school_type),
        fillOpacity: 0.5
        }
    }
    
export {
schoolcatchmentsStyle,
schoolsStyle
}   