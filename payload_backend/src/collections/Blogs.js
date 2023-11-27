/** @type {import('payload/types').CollectionConfig} */
const Blogs = {
  slug: "Blogs",
  access: {
    read: () => true,
    update: () => true,
    delete: () => true,
    create: () => true
  },
  fields: [
    {
      name: 'title',
      label: 'Judul',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      label: 'Konten',
      type: 'textarea',
      required: true,
    },
    {
      name: 'image',
      label: 'gambar',
      type: 'textarea',
      required: true,
    },
  ]
};

export default Blogs;
