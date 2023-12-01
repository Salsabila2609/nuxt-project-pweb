/** @type {import('payload/types').CollectionConfig} */
import payload from "payload";
const Blog = {
  slug: "blog",
  access: {
    read: () => true,
    update: () => true,
    delete: () => true,
    create: () => true,
  },
  hooks: {
    afterOperation: [
      async (args) => {
        if (args.operation === "create") {
          payload.create({
            collection: "Log",
            data: {
              collectionName: "Blog",
              action: "create",
              timestamp: new Date(),
              Blog: args.result.id,
            },
          });
        } else if (args.operation === "deleteByID") {
          payload.create({
            collection: "Log",
            data: {
              collectionName: "Blog",
              action: "delete",
              timestamp: new Date(),
              Blog: args.result.id,
            },
          });
        } else if (args.operation === "updateByID") {
          payload.create({
            collection: "Log",
            data: {
              collectionName: "Blog",
              action: "update",
              timestamp: new Date(),
              Blog: args.result.id,
            },
          });
        }
      },
    ],
  },
  fields: [
    {
      name: "title",
      label: "Judul",
      type: "text",
      required: true,
    },
    {
      name: "content",
      label: "Konten",
      type: "textarea",
      required: true,
    },
    {
      name: "image",
      label: "Gambar",
      type: "textarea",
      required: true,
    },
    {
      name: "author",
      label: "Penulis",
      type: "text",
      required: true,
    },
    {
      name: "alt",
      label: "Alt",
      type: "text",
      required: true,
    },
  ],
};
export default Blog;
