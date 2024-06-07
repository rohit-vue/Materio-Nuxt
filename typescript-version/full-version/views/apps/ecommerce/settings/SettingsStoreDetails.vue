<template>
  <VCard
    title="Profile"
    class="mb-6"
  >
    <VCardText>
      <VRow>
        <VCol
          cols="12"
          md="6"
        >
          <VTextField
            label="Store name"
            placeholder="ABCD"
          />
        </VCol>
        <VCol
          cols="12"
          md="6"
        >
          <VTextField
            label="Phone"
            placeholder="+(123) 456-7890"
          />
        </VCol>
        <VCol
          cols="12"
          md="6"
        >
          <VTextField
            label="Store contact email"
            placeholder="johndoe@email.com"
          />
        </VCol>
        <VCol
          cols="12"
          md="6"
        >
          <VTextField
            label="Sender email"
            placeholder="johndoe@email.com"
          />
        </VCol>
        <VCol>
          <VAlert
            color="warning"
            variant="tonal"
            icon="ri-notification-3-line"
          >
            <VAlertTitle class="mb-0">
              Confirm that you have access to johndoe@gmail.com in sender email settings.
            </VAlertTitle>
          </VAlert>
        </VCol>
      </VRow>
    </VCardText>
  </VCard>

  <VCard
    title="Billing Information"
    class="mb-6"
  >
    <VCardText>
      <VRow>
        <VCol
          cols="12"
          md="6"
        >
          <VTextField
            label="Legal business name"
            placeholder="Themeselection"
          />
        </VCol>

        <VCol
          cols="12"
          md="6"
        >
          <VSelect
            label="Country*"
            :items="['United States', 'Canada', 'UK']"
            placeholder="Canada"
          />
        </VCol>

        <VCol
          cols="12"
          md="6"
        >
          <VTextField
            placeholder="126, New Street"
            label="Address"
          />
        </VCol>

        <VCol
          cols="12"
          md="6"
        >
          <VTextField
            label="Apartment,suit, etc."
            placeholder="Empire Heights"
          />
        </VCol>

        <VCol
          cols="12"
          md="4"
        >
          <VTextField
            label="City"
            placeholder="New York"
          />
        </VCol>

        <VCol
          cols="12"
          md="4"
        >
          <VTextField
            label="State"
            placeholder="NY"
          />
        </VCol>

        <VCol
          cols="12"
          md="4"
        >
          <VTextField
            label="PIN Code"
            placeholder="111011"
          />
        </VCol>
      </VRow>
    </VCardText>
  </VCard>

  <VCard
    title="Time zone and units of measurement"
    subtitle="Used to calculate product prices, shipping weights, and order times."
    class="mb-6"
  >
    <VCardText>
      <VRow>
        <VCol cols="12">
          <VSelect
            label="Time zone"
            :items="['(UTC-12:00) International Date Line West', '(UTC-11:00) Coordinated Universal Time-11', '(UTC-09:00) Alaska', '(UTC-08:00) Baja California']"
            placeholder="(UTC-12:00) International Date Line West"
          />
        </VCol>

        <VCol
          cols="12"
          md="6"
        >
          <VSelect
            label="Unit system"
            :items="['Metric System', 'Imperial', 'International System']"
            placeholder="Metric System"
          />
        </VCol>

        <VCol
          cols="12"
          md="6"
        >
          <VSelect
            label="Default weight unit"
            placeholder="Kilogram"
            :items="['Kilogram', 'Pounds', 'Gram']"
          />
        </VCol>
      </VRow>
    </VCardText>
  </VCard>

  <VCard
    title="Store currency"
    subtitle="The currency your products are sold in."
    class="mb-6"
  >
    <VCardText>
      <VSelect
        label="Store currency"
        :items="['USD', 'INR', 'Euro', 'Pound']"
        placeholder="USD"
      />
    </VCardText>
  </VCard>

  <VCard
    title="Order id format"
    subtitle="Shown on the Orders page, customer pages, and customer order notifications to identify orders."
    class="mb-6"
  >
    <VCardText>
      <VRow>
        <VCol
          cols="12"
          md="6"
        >
          <VTextField
            label="Prefix"
            prefix="#"
          />
        </VCol>

        <VCol
          cols="12"
          md="6"
        >
          <VTextField
            label="Suffix"
            suffix="$"
          />
        </VCol>
      </VRow>

      <div class="mt-2">
        Your order ID will appear as #1001, #1002, #1003 ...
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
