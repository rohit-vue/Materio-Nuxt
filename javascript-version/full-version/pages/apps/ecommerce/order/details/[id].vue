<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import product21 from '@images/ecommerce-images/product-21.png'
import product22 from '@images/ecommerce-images/product-22.png'
import product23 from '@images/ecommerce-images/product-23.png'
import product24 from '@images/ecommerce-images/product-24.png'

const route = useRoute('apps-ecommerce-order-details-id')
const isConfirmDialogVisible = ref(false)
const isUserInfoEditDialogVisible = ref(false)
const isEditAddressDialogVisible = ref(false)

const headers = [
  {
    title: 'Product',
    key: 'productName',
  },
  {
    title: 'Price',
    key: 'price',
  },
  {
    title: 'Quantity',
    key: 'quantity',
  },
  {
    title: 'Total',
    key: 'total',
    sortable: false,
  },
]

const orderData = [
  {
    productName: 'OnePlus 7 Pro',
    productImage: product21,
    brand: 'OnePlus',
    price: 799,
    quantity: 1,
  },
  {
    productName: 'Magic Mouse',
    productImage: product22,
    brand: 'Apple',
    price: 89,
    quantity: 1,
  },
  {
    productName: 'Wooden Chair',
    productImage: product23,
    brand: 'insofer',
    price: 289,
    quantity: 2,
  },
  {
    productName: 'Air Jorden',
    productImage: product24,
    brand: 'Nike',
    price: 299,
    quantity: 2,
  },
]
</script>

<template>
  <div>
    <div class="d-flex justify-space-between align-center flex-wrap gap-y-4 mb-6">
      <div>
        <div class="d-flex gap-2 align-center mb-2 flex-wrap">
          <h5 class="text-h5">
            Order #{{ route.params.id }}
          </h5>
          <div class="d-flex gap-x-2">
            <VChip
              variant="tonal"
              color="success"
              size="small"
            >
              Paid
            </VChip>
            <VChip
              variant="tonal"
              color="info"
              size="small"
            >
              Ready to Pickup
            </VChip>
          </div>
        </div>
        <div>
          <span class="text-body-1">
            Aug 17, 2020, 5:48 (ET)
          </span>
        </div>
      </div>

      <VBtn
        variant="outlined"
        color="error"
        @click="isConfirmDialogVisible = !isConfirmDialogVisible"
      >
        Delete Order
      </VBtn>
    </div>

    <VRow>
      <VCol
        cols="12"
        md="8"
      >
        <!-- 👉 Order Details -->
        <VCard class="mb-6">
          <VCardItem>
            <template #title>
              <h5 class="text-h5">
                Order Details
              </h5>
            </template>
            <template #append>
              <span class="text-primary cursor-pointer">Edit</span>
            </template>
          </VCardItem>

          <VDataTable
            :headers="headers"
            :items="orderData"
            item-value="productName"
            show-select
            class="text-no-wrap"
          >
            <template #item.productName="{ item }">
              <div class="d-flex gap-x-3">
                <VAvatar
                  size="34"
                  variant="tonal"
                  :image="item.productImage"
                  rounded
                />

                <div class="d-flex flex-column align-center">
                  <h6 class="text-h6">
                    {{ item.productName }}
                  </h6>

                  <span class="text-sm text-start align-self-start">
                    {{ item.brand }}
                  </span>
                </div>
              </div>
            </template>

            <template #item.price="{ item }">
              <span>${{ item.price }}</span>
            </template>

            <template #item.total="{ item }">
              <span>
                ${{ item.price * item.quantity }}
              </span>
            </template>

            <template #bottom />
          </VDataTable>
          <VDivider />

          <VCardText>
            <div class="d-flex align-end flex-column">
              <table class="text-high-emphasis">
                <tbody>
                  <tr>
                    <td width="200px">
                      Subtotal:
                    </td>
                    <td class="font-weight-medium">
                      $2,093
                    </td>
                  </tr>
                  <tr>
                    <td>Shipping fee: </td>
                    <td class="font-weight-medium">
                      $2
                    </td>
                  </tr>
                  <tr>
                    <td>Tax: </td>
                    <td class="font-weight-medium">
                      $28
                    </td>
                  </tr>
                  <tr>
                    <td class="font-weight-medium">
                      Total:
                    </td>
                    <td class="font-weight-medium">
                      $2,113
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </VCardText>
        </VCard>

        <!-- 👉 Shipping Activity -->
        <VCard title="Shipping Activity">
          <VCardText>
            <VTimeline
              truncate-line="both"
              align="start"
              side="end"
              line-inset="10"
              line-color="primary"
              density="compact"
              class="v-timeline-density-compact"
            >
              <VTimelineItem
                dot-color="primary"
                size="x-small"
              >
                <div class="d-flex justify-space-between align-center mb-3">
                  <span class="app-timeline-title">Order was placed (Order ID: #32543)</span>
                  <span class="app-timeline-meta">Tuesday 11:29 AM</span>
                </div>
                <p class="app-timeline-text mb-0">
                  Your order has been placed successfully
                </p>
              </VTimelineItem>

              <VTimelineItem
                dot-color="primary"
                size="x-small"
              >
                <div class="d-flex justify-space-between align-center mb-3">
                  <span class="app-timeline-title">Pick-up</span>
                  <span class="app-timeline-meta">Wednesday 11:29 AM</span>
                </div>
                <p class="app-timeline-text mb-0">
                  Pick-up scheduled with courier
                </p>
              </VTimelineItem>

              <VTimelineItem
                dot-color="primary"
                size="x-small"
              >
                <div class="d-flex justify-space-between align-center mb-3">
                  <span class="app-timeline-title">Dispatched</span>
                  <span class="app-timeline-meta">Thursday 8:15 AM</span>
                </div>
                <p class="app-timeline-text mb-0">
                  Item has been picked up by courier.
                </p>
              </VTimelineItem>

              <VTimelineItem
                dot-color="primary"
                size="x-small"
              >
                <div class="d-flex justify-space-between align-center mb-3">
                  <span class="app-timeline-title">Package arrived</span>
                  <span class="app-timeline-meta">Saturday 15:20 AM</span>
                </div>
                <p class="app-timeline-text mb-0">
                  Package arrived at an Amazon facility, NY
                </p>
              </VTimelineItem>

              <VTimelineItem
                dot-color="primary"
                size="x-small"
              >
                <div class="d-flex justify-space-between align-center mb-3">
                  <span class="app-timeline-title">Dispatched for delivery</span>
                  <span class="app-timeline-meta">Today 14:12 PM</span>
                </div>
                <p class="app-timeline-text mb-0">
                  Package has left an Amazon facility , NY
                </p>
              </VTimelineItem>

              <VTimelineItem
                dot-color="primary"
                size="x-small"
              >
                <div class="d-flex justify-space-between align-center mb-3">
                  <span class="app-timeline-title">Delivery</span>
                </div>
                <p class="app-timeline-text mb-0">
                  Package will be delivered by tomorrow
                </p>
              </VTimelineItem>
            </VTimeline>
          </VCardText>
        </VCard>
      </VCol>

      <VCol
        cols="12"
        md="4"
      >
        <!-- 👉 Customer Details  -->
        <VCard class="mb-6">
          <VCardText class="d-flex flex-column gap-y-6">
            <h5 class="text-h5">
              Customer Details
            </h5>

            <div class="d-flex align-center">
              <VAvatar
                :image="avatar1"
                class="me-3"
              />
              <div>
                <div class="text-body-1 text-high-emphasis font-weight-medium">
                  Shamus Tuttle
                </div>
                <span>Customer ID: #47389</span>
              </div>
            </div>

            <div class="d-flex align-center">
              <VAvatar
                variant="tonal"
                color="success"
                class="me-3"
              >
                <VIcon icon="ri-shopping-cart-line" />
              </VAvatar>

              <h6 class="text-h6">
                12 Orders
              </h6>
            </div>

            <div class="d-flex flex-column gap-y-1">
              <div class="d-flex justify-space-between gap-1 text-body-2">
                <h6 class="text-h6">
                  Contact Info
                </h6>
                <span
                  class="text-base text-primary font-weight-medium cursor-pointer"
                  @click="isUserInfoEditDialogVisible = !isUserInfoEditDialogVisible"
                >
                  Edit
                </span>
              </div>
              <span>Email: Sheldon88@yahoo.com</span>
              <span>Mobile: +1 (609) 972-22-22</span>
            </div>
          </VCardText>
        </VCard>

        <!-- 👉 Shipping Address -->
        <VCard class="mb-6">
          <VCardText>
            <div class="d-flex align-center justify-space-between gap-1 mb-6">
              <div class="text-body-1 text-high-emphasis font-weight-medium">
                Shipping Address
              </div>
              <span
                class="text-base text-primary font-weight-medium cursor-pointer"
                @click="isEditAddressDialogVisible = !isEditAddressDialogVisible"
              >Edit</span>
            </div>
            <div>
              45 Rocker Terrace <br> Latheronwheel <br> KW5 8NW, London <br> UK
            </div>
          </VCardText>
        </VCard>

        <!-- 👉 Billing Address -->
        <VCard>
          <VCardText>
            <div class="d-flex align-center justify-space-between gap-1 mb-3">
              <div class="text-body-1 text-high-emphasis font-weight-medium">
                Billing Address
              </div>
              <span
                class="text-base text-primary font-weight-medium cursor-pointer"
                @click="isEditAddressDialogVisible = !isEditAddressDialogVisible"
              >Edit</span>
            </div>
            <div>
              45 Rocker Terrace <br> Latheronwheel <br> KW5 8NW, London <br> UK
            </div>

            <div class="mt-6">
              <h6 class="text-h6 mb-1">
                Mastercard
              </h6>
              <div class="text-base">
                Card Number: ******4291
              </div>
            </div>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>

    <ConfirmDialog
      v-model:isDialogVisible="isConfirmDialogVisible"
      confirmation-question="Are you sure to cancel your Order?"
      cancel-msg="Order cancelled!!"
      cancel-title="Cancelled"
      confirm-msg="Your order cancelled successfully."
      confirm-title="Cancelled!"
    />

    <UserInfoEditDialog v-model:isDialogVisible="isUserInfoEditDialogVisible" />

    <AddEditAddressDialog v-model:isDialogVisible="isEditAddressDialogVisible" />
  </div>
</template>
