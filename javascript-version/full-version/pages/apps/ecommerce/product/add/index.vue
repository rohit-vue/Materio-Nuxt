<script setup>
import {
  useDropZone,
  useFileDialog,
  useObjectUrl,
} from '@vueuse/core'
import { ref } from 'vue'

const optionCounter = ref(1)
const dropZoneRef = ref()
const fileData = ref([])
const { open, onChange } = useFileDialog({ accept: 'image/*' })
function onDrop(DroppedFiles) {
  DroppedFiles?.forEach(file => {
    if (file.type.slice(0, 6) !== 'image/') {
      alert('Only image files are allowed')
      
      return
    }
    fileData.value.push({
      file,
      url: useObjectUrl(file).value ?? '',
    })
  })
}
onChange(selectedFiles => {
  if (!selectedFiles)
    return
  for (const file of selectedFiles) {
    fileData.value.push({
      file,
      url: useObjectUrl(file).value ?? '',
    })
  }
})
useDropZone(dropZoneRef, onDrop)

const content = ref(`<p>
      This is a radically reduced version of tiptap. It has support for a document, with paragraphs and text. That's it. It's probably too much for real minimalists though.
    </p>
    <p>
      The paragraph extension is not really required, but you need at least one node. Sure, that node can be something different.
    </p>`)

const activeTab = ref('Restock')

const shippingList = [
  {
    desc: 'You\'ll be responsible for product delivery.Any damage or delay during shipping may cost you a Damage fee',
    title: 'Fulfilled by Seller',
    value: 'Fulfilled by Seller',
  },
  {
    desc: 'Your product, Our responsibility.For a measly fee, we will handle the delivery process for you.',
    title: 'Fulfilled by Company name',
    value: 'Fulfilled by Company name',
  },
]

const shippingType = ref('Fulfilled by Company name')
const deliveryType = ref('Worldwide delivery')

const selectedAttrs = ref([
  'Biodegradable',
  'Expiry Date',
])

const inventoryTabsData = [
  {
    icon: 'ri-add-line',
    title: 'Restock',
    value: 'Restock',
  },
  {
    icon: 'ri-flight-takeoff-line',
    title: 'Shipping',
    value: 'Shipping',
  },
  {
    icon: 'ri-map-pin-line',
    title: 'Global Delivery',
    value: 'Global Delivery',
  },
  {
    icon: 'ri-attachment-2',
    title: 'Attributes',
    value: 'Attributes',
  },
  {
    icon: 'ri-lock-unlock-line',
    title: 'Advanced',
    value: 'Advanced',
  },
]

const inStock = ref(true)
const isTaxable = ref(true)
</script>

<template>
  <div>
    <div class="d-flex flex-wrap justify-space-between gap-4 mb-6">
      <div class="d-flex flex-column justify-center">
        <h4 class="text-h4">
          Add a new product
        </h4>
        <span class="text-medium-emphasis">Orders placed across your store</span>
      </div>

      <div class="d-flex gap-4 align-center flex-wrap">
        <VBtn
          variant="outlined"
          color="secondary"
        >
          Discard
        </VBtn>
        <VBtn
          variant="outlined"
          color="primary"
        >
          Save Draft
        </VBtn>
        <VBtn>Publish Product</VBtn>
      </div>
    </div>

    <VRow>
      <VCol md="8">
        <!-- 👉 Product Information -->
        <VCard
          class="mb-6"
          title="Product Information"
        >
          <VCardText>
            <VRow>
              <VCol cols="12">
                <VTextField
                  label="Product Name"
                  placeholder="iPhone 14"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  label="SKU"
                  placeholder="FXSK123U"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  label="Barcode"
                  placeholder="0123-4567"
                />
              </VCol>
              <VCol>
                <VLabel class="mb-1">
                  Description (Optional)
                </VLabel>
                <TiptapEditor
                  v-model="content"
                  class="border rounded"
                />
              </VCol>
            </VRow>
          </VCardText>
        </VCard>

        <!-- 👉 Product Image -->
        <VCard class="mb-6">
          <VCardItem>
            <template #title>
              Product Image
            </template>
            <template #append>
              <div class="text-primary font-weight-medium cursor-pointer">
                Add Media from URL
              </div>
            </template>
          </VCardItem>

          <VCardText>
            <div class="flex">
              <div class="w-full h-auto relative">
                <div
                  ref="dropZoneRef"
                  class="cursor-pointer"
                  @click="() => open()"
                >
                  <div
                    v-if="fileData.length === 0"
                    class="d-flex flex-column justify-center align-center gap-y-2 pa-12 border-dashed drop-zone"
                  >
                    <VAvatar
                      variant="tonal"
                      color="secondary"
                      rounded
                    >
                      <VIcon icon="ri-upload-2-line" />
                    </VAvatar>
                    <h4 class="text-h4">
                      Drag and Drop Your Image Here.
                    </h4>
                    <span class="text-disabled">or</span>

                    <VBtn variant="outlined">
                      Browse Images
                    </VBtn>
                  </div>

                  <div
                    v-else
                    class="d-flex justify-center align-center gap-3 pa-8 border-dashed drop-zone flex-wrap"
                  >
                    <VRow class="match-height w-100">
                      <template
                        v-for="(item, index) in fileData"
                        :key="index"
                      >
                        <VCol
                          cols="12"
                          sm="4"
                        >
                          <VCard
                            :ripple="false"
                            border
                          >
                            <VCardText
                              class="d-flex flex-column"
                              @click.stop
                            >
                              <VImg
                                :src="item.url"
                                width="200px"
                                height="150px"
                                class="w-100 mx-auto"
                              />
                              <div class="mt-2">
                                <span class="clamp-text text-wrap">
                                  {{ item.file.name }}
                                </span>
                                <span>
                                  {{ item.file.size / 1000 }} KB
                                </span>
                              </div>
                            </VCardText>
                            <VCardActions>
                              <VBtn
                                variant="text"
                                block
                                @click.stop="fileData.splice(index, 1)"
                              >
                                Remove File
                              </VBtn>
                            </VCardActions>
                          </VCard>
                        </VCol>
                      </template>
                    </VRow>
                  </div>
                </div>
              </div>
            </div>
          </VCardText>
        </VCard>

        <!-- 👉 Variants -->
        <VCard
          title="Variants"
          class="mb-6"
        >
          <VCardText>
            <template
              v-for="i in optionCounter"
              :key="i"
            >
              <VRow>
                <VCol
                  cols="12"
                  md="4"
                >
                  <VSelect
                    :items="['Size', 'Color', 'Weight', 'Smell']"
                    placeholder="Select Variant"
                    label="Select Variant"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="8"
                >
                  <VTextField
                    label="Variant Value"
                    type="number"
                    placeholder="Enter Variant Value"
                  />
                </VCol>
              </VRow>
            </template>

            <VBtn
              class="mt-6"
              @click="optionCounter++"
            >
              Add another option
            </VBtn>
          </VCardText>
        </VCard>

        <!-- 👉 Inventory -->
        <VCard
          title="Inventory"
          class="inventory-card"
        >
          <VCardText>
            <VRow>
              <VCol
                cols="12"
                md="4"
              >
                <VTabs
                  v-model="activeTab"
                  direction="vertical"
                  color="primary"
                  class="v-tabs-pill"
                >
                  <VTab
                    v-for="(tab, index) in inventoryTabsData"
                    :key="index"
                    :value="tab.value"
                  >
                    <VIcon
                      :icon="tab.icon"
                      class="me-2"
                    />
                    <span>{{ tab.title }}</span>
                  </VTab>
                </VTabs>
              </VCol>

              <VDivider
                :vertical="$vuetify.display.mdAndUp ? true : false"
                inset
              />

              <VCol
                cols="12"
                md="8"
              >
                <VWindow
                  v-model="activeTab"
                  class="w-100"
                  :touch="false"
                >
                  <VWindowItem value="Restock">
                    <div class="d-flex flex-column gap-y-4">
                      <div class="text-body-1 font-weight-medium">
                        Options
                      </div>
                      <div class="d-flex gap-x-4 align-center">
                        <VTextField
                          label="Add to stock"
                          placeholder="100"
                          density="compact"
                        />
                        <VBtn prepend-icon="ri-check-line">
                          Confirm
                        </VBtn>
                      </div>
                      <div class="d-flex flex-column gap-2 text-high-emphasis">
                        <div>
                          Product in stock now: 54
                        </div>
                        <div>
                          Product in transit: 390
                        </div>
                        <div>
                          Last time restocked: 24th June, 2022
                        </div>
                        <div>
                          Total stock over lifetime: 2,430
                        </div>
                      </div>
                    </div>
                  </VWindowItem>

                  <VWindowItem value="Shipping">
                    <VRadioGroup v-model="shippingType">
                      <template #label>
                        <span class="font-weight-medium mb-1">Shipping Type</span>
                      </template>
                      <VRadio
                        v-for="item in shippingList"
                        :key="item.value"
                        :value="item.value"
                        class="mb-4 ps-1"
                        inline
                      >
                        <template #label>
                          <div>
                            <div class="text-high-emphasis font-weight-medium mb-1">
                              {{ item.title }}
                            </div>
                            <div class="text-sm">
                              {{ item.desc }}
                            </div>
                          </div>
                        </template>
                      </VRadio>
                    </VRadioGroup>
                  </VWindowItem>

                  <VWindowItem value="Global Delivery">
                    <div>
                      <VRadioGroup v-model="deliveryType">
                        <template #label>
                          <span class="font-weight-medium mb-1">Global Delivery</span>
                        </template>

                        <VRadio
                          value="Worldwide delivery"
                          class="mb-4 ps-1"
                        >
                          <template #label>
                            <div>
                              <div class="text-high-emphasis font-weight-medium mb-1">
                                Worldwide delivery
                              </div>
                              <div class="text-sm">
                                Only available with Shipping method:
                                <span class="text-primary">
                                  Fulfilled by Company name
                                </span>
                              </div>
                            </div>
                          </template>
                        </VRadio>

                        <VRadio
                          value="Selected Countries"
                          class="mb-4 ps-1"
                        >
                          <template #label>
                            <div>
                              <div class="text-high-emphasis font-weight-medium mb-1">
                                Selected Countries
                              </div>
                              <VTextField
                                placeholder="USA"
                                style="min-inline-size: 200px;"
                              />
                            </div>
                          </template>
                        </VRadio>

                        <VRadio>
                          <template #label>
                            <div>
                              <div class="text-high-emphasis font-weight-medium mb-1">
                                Local delivery
                              </div>
                              <div class="text-sm">
                                Deliver to your country of residence
                                <span class="text-primary">
                                  Change profile address
                                </span>
                              </div>
                            </div>
                          </template>
                        </VRadio>
                      </VRadioGroup>
                    </div>
                  </VWindowItem>

                  <VWindowItem value="Attributes">
                    <div class="mb-2 text-base font-weight-medium">
                      Attributes
                    </div>
                    <div>
                      <VCheckbox
                        v-model="selectedAttrs"
                        label="Fragile Product"
                        value="Fragile Product"
                        class="ps-3"
                      />
                      <VCheckbox
                        v-model="selectedAttrs"
                        value="Biodegradable"
                        label="Biodegradable"
                        class="ps-3"
                      />
                      <VCheckbox
                        v-model="selectedAttrs"
                        value="Frozen Product"
                        class="ps-3"
                      >
                        <template #label>
                          <div class="d-flex flex-column mb-1">
                            <div>Frozen Product</div>
                            <VTextField
                              placeholder="40 C"
                              type="number"
                              style="min-inline-size: 250px;"
                            />
                          </div>
                        </template>
                      </VCheckbox>

                      <VCheckbox
                        v-model="selectedAttrs"
                        value="Expiry Date"
                        class="ps-3"
                      >
                        <template #label>
                          <div class="d-flex flex-column mb-1">
                            <div>Expiry Date of Product</div>
                            <AppDateTimePicker
                              model-value="2025-06-14"
                              placeholder="Select a Date"
                            />
                          </div>
                        </template>
                      </VCheckbox>
                    </div>
                  </VWindowItem>

                  <VWindowItem value="Advanced">
                    <div class="mb-3 text-base font-weight-medium">
                      Advanced
                    </div>
                    <VRow>
                      <VCol
                        cols="12"
                        sm="6"
                        md="7"
                      >
                        <VSelect
                          style="min-inline-size: 200px;"
                          label="Product ID Type"
                          placeholder="Select Product Type"
                          :items="['ISBN', 'UPC', 'EAN', 'JAN']"
                        />
                      </VCol>

                      <VCol
                        cols="12"
                        sm="6"
                        md="5"
                      >
                        <VTextField
                          label="Product Id"
                          placeholder="100023"
                          type="number"
                        />
                      </VCol>
                    </VRow>
                  </VWindowItem>
                </VWindow>
              </VCol>
            </VRow>
          </VCardText>
        </VCard>
      </VCol>

      <VCol
        md="4"
        cols="12"
      >
        <!-- 👉 Pricing -->
        <VCard
          title="Pricing"
          class="mb-6"
        >
          <VCardText>
            <VTextField
              label="Base Price"
              placeholder="iPhone 14"
              class="mb-6"
            />
            <VTextField
              label="Discounted Price"
              placeholder="$499"
              class="mb-4"
            />
            <VCheckbox
              v-model="isTaxable"
              label="Charge Tax on this product"
            />

            <VDivider class="my-2" />

            <div class="d-flex flex-raw align-center justify-space-between ">
              <span>In stock</span>
              <VSwitch
                v-model="inStock"
                density="compact"
              />
            </div>
          </VCardText>
        </VCard>

        <!-- 👉 Organize -->
        <VCard title="Organize">
          <VCardText>
            <div class="d-flex flex-column gap-y-4">
              <VSelect
                placeholder="Select Vendor"
                label="Vendor"
                :items="['Men\'s Clothing', 'Women\'s Clothing', 'Kid\'s Clothing']"
              />
              <VSelect
                placeholder="Select Category"
                label="Category"
                :items="['Household', 'Office', 'Electronics', 'Management', 'Automotive']"
              >
                <template #append>
                  <IconBtn
                    icon="ri-add-line"
                    variant="outlined"
                    color="primary"
                    rounded
                  />
                </template>
              </VSelect>
              <VSelect
                placeholder="Select Collection"
                label="Collection"
                :items="['Men\'s Clothing', 'Women\'s Clothing', 'Kid\'s Clothing']"
              />
              <VSelect
                placeholder="Select Status"
                label="Status"
                :items="['Published', 'Inactive', 'Scheduled']"
              />
              <VTextField
                label="Tags"
                placeholder="Fashion, Trending, Summer"
              />
            </div>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>

<style lang="scss" scoped>
  .drop-zone {
    border: 1px dashed rgba(var(--v-theme-on-surface), 0.12);
    border-radius: 6px;
  }
</style>

<style lang="scss">
.inventory-card{
  .v-radio-group,
  .v-checkbox {
    .v-selection-control {
      align-items: start !important;
    }

    .v-label.custom-input {
      border: none !important;
    }
  }
}

.ProseMirror{
  p{
    margin-block-end: 0;
  }

  padding: 0.5rem;
  outline: none;

  p.is-editor-empty:first-child::before {
    block-size: 0;
    color: #adb5bd;
    content: attr(data-placeholder);
    float: inline-start;
    pointer-events: none;
  }
}
</style>
