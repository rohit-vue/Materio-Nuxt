<script setup>
const customerNotifications = ref([
  {
    type: 'New customer sign up',
    email: true,
    app: false,
  },
  {
    type: 'Customer account password reset',
    email: false,
    app: true,
  },
  {
    type: 'Customer account invite',
    email: false,
    app: false,
  },
])

const shippingNotifications = ref([
  {
    type: 'Picked up',
    email: true,
    app: false,
  },
  {
    type: 'Shipping update ',
    email: false,
    app: true,
  },
  {
    type: 'Delivered',
    email: false,
    app: false,
  },
])

const ordersNotification = ref([
  {
    type: 'Order purchase',
    email: true,
    app: false,
  },
  {
    type: 'Order cancelled',
    email: false,
    app: true,
  },
  {
    type: 'Order refund request',
    email: false,
    app: false,
  },
  {
    type: 'Order confirmation',
    email: false,
    app: true,
  },
  {
    type: 'Payment error',
    email: false,
    app: true,
  },
])
</script>

<template>
  <VCard class="mb-4">
    <VCardText>
      <h5 class="text-h5 mb-4">
        Customer
      </h5>
      <VTable class="text-no-wrap text-high-emphasis border rounded mb-6">
        <thead>
          <tr>
            <th scope="col">
              TYPE
            </th>
            <th scope="col">
              EMAIL
            </th>
            <th scope="col">
              APP
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="notification in customerNotifications"
            :key="notification.type"
          >
            <td width="400px">
              {{ notification.type }}
            </td>
            <td>
              <VCheckbox v-model="notification.email" />
            </td>

            <td>
              <VCheckbox v-model="notification.app" />
            </td>
          </tr>
        </tbody>
      </VTable>

      <h5 class="text-h5 mb-4">
        Orders
      </h5>
      <VTable class="border rounded text-high-emphasis text-no-wrap mb-6">
        <thead>
          <tr>
            <th scope="col">
              TYPE
            </th>
            <th scope="col">
              EMAIL
            </th>
            <th scope="col">
              APP
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="notification in ordersNotification"
            :key="notification.type"
          >
            <td width="400px">
              {{ notification.type }}
            </td>
            <td>
              <VCheckbox v-model="notification.email" />
            </td>

            <td>
              <VCheckbox v-model="notification.app" />
            </td>
          </tr>
        </tbody>
      </VTable>

      <h5 class="text-h5 mb-4">
        Shipping
      </h5>
      <VTable class="border rounded text-high-emphasis text-no-wrap mb-6">
        <thead>
          <tr>
            <th scope="col">
              TYPE
            </th>
            <th scope="col">
              EMAIL
            </th>
            <th scope="col">
              APP
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="notification in shippingNotifications"
            :key="notification.type"
          >
            <td width="400px">
              {{ notification.type }}
            </td>
            <td>
              <VCheckbox v-model="notification.email" />
            </td>

            <td>
              <VCheckbox v-model="notification.app" />
            </td>
          </tr>
        </tbody>
      </VTable>
    </VCardText>
  </VCard>

  <div class="d-flex justify-end gap-x-4">
    <VBtn
      color="secondary"
      variant="outlined"
    >
      Discard
    </VBtn>
    <VBtn>Save Changes</VBtn>
  </div>
</template>
