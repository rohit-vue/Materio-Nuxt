export default [
  {
    title: 'Apps',
    icon: { icon: 'ri-mail-open-line' },
    children: [
      {
        title: 'eCommerce',
        icon: { icon: 'ri-shopping-cart-2-line' },
        children: [
          {
            title: 'Dashboard',
            to: 'apps-ecommerce-dashboard',
          },
          {
            title: 'Product',
            children: [
              { title: 'List', to: 'apps-ecommerce-product-list' },
              { title: 'Add', to: 'apps-ecommerce-product-add' },
              { title: 'Category', to: 'apps-ecommerce-product-category-list' },
            ],
          },
          {
            title: 'Order',
            children: [
              { title: 'List', to: 'apps-ecommerce-order-list' },
              { title: 'Details', to: { name: 'apps-ecommerce-order-details-id', params: { id: '9042' } } },
            ],
          },
          {
            title: 'Customer',
            children: [
              { title: 'List', to: 'apps-ecommerce-customer-list' },
              { title: 'Details', to: { name: 'apps-ecommerce-customer-details-id', params: { id: 478426 } } },
            ],
          },
          {
            title: 'Manage Review',
            to: 'apps-ecommerce-manage-review',
          },
          {
            title: 'Referrals',
            to: 'apps-ecommerce-referrals',
          },
          {
            title: 'Settings',
            to: 'apps-ecommerce-settings',
          },
        ],
      },
      {
        title: 'Academy',
        icon: { icon: 'ri-book-open-line' },
        children: [
          { title: 'Dashboard', to: 'apps-academy-dashboard' },
          { title: 'My Course', to: 'apps-academy-my-course' },
          { title: 'Course Details', to: 'apps-academy-course-details' },
        ],
      },
      {
        title: 'Logistics',
        icon: { icon: 'ri-truck-line' },
        children: [
          { title: 'Dashboard', to: 'apps-logistics-dashboard' },
          { title: 'Fleet', to: 'apps-logistics-fleet' },
        ],
      },
      {
        title: 'Email',
        icon: { icon: 'ri-mail-line' },
        to: 'apps-email',
      },
      {
        title: 'Chat',
        icon: { icon: 'ri-message-line' },
        to: 'apps-chat',
      },
      {
        title: 'Calendar',
        to: 'apps-calendar',
        icon: { icon: 'ri-calendar-line' },
      },
      {
        title: 'Invoice',
        icon: { icon: 'ri-article-line' },
        children: [
          { title: 'List', to: 'apps-invoice-list' },
          { title: 'Preview', to: { name: 'apps-invoice-preview-id', params: { id: '5036' } } },
          { title: 'Edit', to: { name: 'apps-invoice-edit-id', params: { id: '5036' } } },
          { title: 'Add', to: 'apps-invoice-add' },
        ],
      },
      {
        title: 'User',
        icon: { icon: 'ri-user-line' },
        children: [
          { title: 'List', to: 'apps-user-list' },
          { title: 'View', to: { name: 'apps-user-view-id', params: { id: 21 } } },
        ],
      },
      {
        title: 'Roles & Permissions',
        icon: { icon: 'ri-shield-user-line' },
        children: [
          { title: 'Roles', to: 'apps-roles' },
          { title: 'Permissions', to: 'apps-permissions' },
        ],
      },
    ],
  },
]
