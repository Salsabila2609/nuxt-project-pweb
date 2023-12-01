/** @type {import('payload/types').CollectionConfig} */
import payload from "payload";
const submitForm = {
  slug: "submitForm",
  access: {
    read: () => true,
    update: () => true,
    delete: () => true,
    create: () => true,
  },
  hooks: {
    afterOperation: [
      async (args) => {
        if (args.operation == "create") {
          payload.create({
            collection: "Log",
            data: {
              collectionName: "submitForm",
              action: "create",
              timestamp: new Date(),
              form: args.result.id,
            },
          });
        } else if (args.operation == "delete") {
          payload.create({
            collection: "Log",
            data: {
              collectionName: "submitForm",
              action: "delete",
              timestamp: new Date(),
              form: args.result.id,
            },
          });
        } else if (args.operation == "updateByID") {
          payload.create({
            collection: "Log",
            data: {
              collectionName: "submitForm",
              action: "update",
              timestamp: new Date(),
              form: args.result.id,
            },
          });
        }
      },
    ],
  },
  fields: [
    {
      name: "fullName",
      label: "fullName",
      type: "text",
      required: true,
    },
    {
      name: "email",
      label: "email",
      type: "text",
      required: true,
    },
    {
      name: "phone",
      label: "phone",
      type: "text",
      required: true,
    },
    {
      name: "message",
      label: "message",
      type: "textarea",
      required: true,
    },
  ],
};

export default submitForm;
