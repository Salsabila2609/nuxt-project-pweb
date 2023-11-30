/** @type {import('payload/types').CollectionConfig} */
import payload from 'payload';
const Blogs = {
  slug: "Blogs",
  access: {
    read: () => true,
    update: () => true,
    delete: () => true,
    create: () => true
  },
  hooks: {
    afterOperation: [
      async (args) => {
        if (args.operation === "create") {
          payload.create({
            collection: "log",
            data: {
              collectionName: "Blogs",
              action: "create",
              timestamp: new Date(),
              Blogs: args.result.id,
            },
          });
        } else if (args.operation === "deleteByID") {
          payload.create({
            collection: "log",
            data: {
              collectionName: "Blogs",
              action: "delete",
              timestamp: new Date(),
              Blogs: args.result.id,
            },
          });
        } else if (args.operation === "updateByID") {
          payload.create({
            collection: "log",
            data: {
              collectionName: "Blogs",
              action: "update",
              timestamp: new Date(),
              Blogs: args.result.id,
            },
          });
        }
      },
    ],
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
