export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'id',
      title: 'Id',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'size',
      title: 'Size',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'color',
      title: 'Color',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'details',
      title: 'Details',
      type: 'string',
    },
  ],
};
