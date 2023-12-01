/** @type {import('payload/types').CollectionConfig} */
const Log = {
  slug: "Log",
  access: {
    create: () => true,
    read: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: "collectionName",
      type: "text",
      required: true,
    },
    {
      name: "action",
      type: "text",
      required: true,
    },
    {
      name: "timestamp",
      type: "date",
      required: true,
    },
    {
      name: "blog",
      type: "relationship",
      relationTo: "blog",
    },
    {
      name: "submitForm",
      type: "relationship",
      relationTo: "submitForm",
    },
  ],
};

export default Log;
