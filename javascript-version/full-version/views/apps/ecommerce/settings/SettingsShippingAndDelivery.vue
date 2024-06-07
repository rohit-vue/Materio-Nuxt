<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import americaFlag from '@images/icons/countries/us.png'

const domesticTableData = [
  {
    rate: 'Weight',
    condition: '5Kg-10Kg',
    price: '$9',
  },
  {
    rate: 'VAT',
    condition: '12%',
    price: '$25',
  },
  {
    rate: 'Duty',
    condition: '-',
    price: '-',
  },
]

const InternationalTableData = [
  {
    rate: 'Weight',
    condition: '5Kg-10Kg',
    price: '$9',
  },
  {
    rate: 'VAT',
    condition: '12%',
    price: '$25',
  },
  {
    rate: 'Duty',
    condition: 'Japan',
    price: '$49',
  },
]
</script>

<template>
  <VCard class="mb-6">
    <VCardItem
      title="Shipping Zone"
      subtitle="Choose where you ship and how much you charge for shipping at checkout."
    >
      <template #append>
        <VBtn variant="text">
          Create Zone
        </VBtn>
      </template>
    </VCardItem>

    <VCardText>
      <div class="mb-6">
        <div class="d-flex flex-wrap align-center mb-4">
          <VAvatar
            :image="avatar1"
            size="34"
            class="me-4"
          />

          <div>
            <h6 class="text-h6">
              Domestic
            </h6>
            <p class="text-body-2 mb-0">
              United state of America
            </p>
          </div>

          <VSpacer />

          <div>
            <IconBtn size="large">
              <VIcon icon="ri-pencil-line" />
            </IconBtn>
            <IconBtn size="large">
              <VIcon icon="ri-delete-bin-7-line" />
            </IconBtn>
          </div>
        </div>

        <VTable class="border rounded mb-4">
          <thead>
            <tr>
              <th>RATE NAME</th>
              <th>CONDITION</th>
              <th>PRICE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(data, index) in domesticTableData"
              :key="index"
            >
              <td>{{ data.rate }}</td>
              <td>{{ data.condition }}</td>
              <td>{{ data.price }}</td>
              <td style="inline-size: 2rem;">
                <IconBtn>
                  <VIcon icon="ri-more-2-line" />
                </IconBtn>
              </td>
            </tr>
          </tbody>
        </VTable>

        <VBtn
          variant="outlined"
          size="small"
        >
          Add rate
        </VBtn>
      </div>

      <div>
        <div class="d-flex flex-wrap align-center mb-4">
          <VAvatar
            :image="americaFlag"
            size="34"
            class="me-4"
          />

          <div>
            <h6 class="text-h6">
              International
            </h6>
            <p class="text-body-2 mb-0">
              United state of America
            </p>
          </div>

          <VSpacer />

          <div>
            <IconBtn size="large">
              <VIcon icon="ri-pencil-line" />
            </IconBtn>
            <IconBtn size="large">
              <VIcon icon="ri-delete-bin-7-line" />
            </IconBtn>
          </div>
        </div>

        <VTable class="border rounded mb-4">
          <thead>
            <tr>
              <th>RATE NAME</th>
              <th>CONDITION</th>
              <th>PRICE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(data, index) in InternationalTableData"
              :key="index"
            >
              <td>{{ data.rate }}</td>
              <td>{{ data.condition }}</td>
              <td>{{ data.price }}</td>
              <td style="inline-size: 2rem;">
                <IconBtn>
                  <VIcon icon="ri-more-2-line" />
                </IconBtn>
              </td>
            </tr>
          </tbody>
        </VTable>

        <VBtn
          variant="outlined"
          size="small"
        >
          Add rate
        </VBtn>
      </div>
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
