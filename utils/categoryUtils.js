export const categoryOptions = [
    'CAPACITACION',
    'VIAJES',
    'SUMINISTROS_DE_OFICINA',
    'MANTENIMIENTO',
    'SERVICIOS_EXTERNOS',
    'OPERATIVO',
    'PAPELERIA',
    'TRANSPORTE_LOCAL',
    'REPARACIONES_MENORES',
    'SERVICIOS_MENSAJERIA',
    'REEMBOLSOS_VARIOS',
  ];
  
  
  export const formatCategoryName = (category) => {
    return category
      .split('_')
      .map(word => word.charAt(0) + word.slice(1).toLowerCase())
      .join(' ');
  };