/** @type {import('payload/types').CollectionConfig} */
const submitForm = {
    slug: "submitForm",
    access: {
      read: () => true,
      update: () => true,
      delete: () => true,
      create: () => true
    },
    fields: [
      {
        name: 'fullName',
        label: 'fullName',
        type: 'text',
        required: true,
      },
      {
        name: 'email',
        label: 'email',
        type: 'text',
        required: true,
      },
      {
        name: 'phone',
        label: 'phone',
        type: 'text',
        required: true,
      },
      {
        name: 'message',
        label: 'message',
        type: 'textarea',
        required: true,
      },
    ]
  };
  
  export default submitForm;
  