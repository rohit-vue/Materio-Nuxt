<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
import avatar7 from '@images/avatars/avatar-7.png'
import avatar8 from '@images/avatars/avatar-8.png'

const now = new Date()
const currentMonth = now.toLocaleString('default', { month: '2-digit' })

// 👉 Invoice balance variant resolver
const resolveInvoiceBalanceVariant = (balance, total) => {
  if (balance === total)
    return {
      status: 'Unpaid',
      chip: { color: 'error' },
    }
  if (balance === 0)
    return {
      status: 'Paid',
      chip: { color: 'success' },
    }
  
  return {
    status: balance,
    chip: { variant: 'text' },
  }
}

const resolveInvoiceStatusVariantAndIcon = status => {
  if (status === 'Partial Payment')
    return {
      variant: 'warning',
      icon: 'ri-line-chart-line',
    }
  if (status === 'Paid')
    return {
      variant: 'success',
      icon: 'ri-check-line',
    }
  if (status === 'Downloaded')
    return {
      variant: 'info',
      icon: 'ri-arrow-down-line',
    }
  if (status === 'Draft')
    return {
      variant: 'secondary',
      icon: 'ri-save-line',
    }
  if (status === 'Sent')
    return {
      variant: 'primary',
      icon: 'ri-mail-line',
    }
  if (status === 'Past Due')
    return {
      variant: 'error',
      icon: 'ri-error-warning-line',
    }
  
  return {
    variant: 'secondary',
    icon: 'ri-close-line',
  }
}

const invoices = [
  {
    id: 5024,
    issuedDate: `${ now.getFullYear() }-${ currentMonth }-28`,
    client: {
      address: '276 Michael Gardens Apt. 004',
      company: 'Shea, Velez and Garcia LLC',
      companyEmail: 'zjohnson@nichols-powers.com',
      country: 'Philippines',
      contact: '(817) 700-2984',
      name: 'Christopher Allen',
    },
    service: 'Software Development',
    total: 2787,
    avatar: avatar1,
    invoiceStatus: 'Partial Payment',
    balance: 0,
    dueDate: `${ now.getFullYear() }-${ currentMonth }-25`,
  },
  {
    id: 5025,
    issuedDate: `${ now.getFullYear() }-${ currentMonth }-21`,
    client: {
      address: '633 Bell Well Apt. 057',
      company: 'Adams, Simmons and Brown Group',
      companyEmail: 'kayla09@thomas.com',
      country: 'Martinique',
      contact: '(266) 611-9482',
      name: 'Joseph Oliver',
    },
    service: 'UI/UX Design & Development',
    total: 5591,
    avatar: avatar2,
    invoiceStatus: 'Downloaded',
    balance: 0,
    dueDate: `${ now.getFullYear() }-${ currentMonth }-07`,
  },
  {
    id: 5026,
    issuedDate: `${ now.getFullYear() }-${ currentMonth }-24`,
    client: {
      address: '1068 Lopez Fall',
      company: 'Williams-Lawrence and Sons',
      companyEmail: 'melvindavis@allen.info',
      country: 'Mexico',
      contact: '(739) 745-9728',
      name: 'Megan Roberts',
    },
    service: 'Template Customization',
    total: 2783,
    avatar: avatar3,
    invoiceStatus: 'Draft',
    balance: 0,
    dueDate: `${ now.getFullYear() }-${ currentMonth }-22`,
  },
  {
    id: 5027,
    issuedDate: `${ now.getFullYear() }-${ currentMonth }-13`,
    client: {
      address: '86691 Mackenzie Light Suite 568',
      company: 'Deleon Inc LLC',
      companyEmail: 'gjordan@fernandez-coleman.com',
      country: 'Costa Rica',
      contact: '(682) 804-6506',
      name: 'Mary Garcia',
    },
    service: 'Template Customization',
    total: 2719,
    avatar: avatar4,
    invoiceStatus: 'Sent',
    balance: 0,
    dueDate: `${ now.getFullYear() }-${ currentMonth }-04`,
  },
  {
    id: 5028,
    issuedDate: `${ now.getFullYear() }-${ currentMonth }-18`,
    client: {
      address: '86580 Sarah Bridge',
      company: 'Farmer, Johnson and Anderson Group',
      companyEmail: 'robertscott@garcia.com',
      country: 'Cameroon',
      contact: '(775) 366-0411',
      name: 'Crystal Mays',
    },
    service: 'Template Customization',
    total: 3325,
    avatar: avatar5,
    invoiceStatus: 'Paid',
    balance: 361,
    dueDate: `${ now.getFullYear() }-${ currentMonth }-02`,
  },
  {
    id: 5029,
    issuedDate: `${ now.getFullYear() }-${ currentMonth }-29`,
    client: {
      address: '49709 Edwin Ports Apt. 353',
      company: 'Sherman-Johnson PLC',
      companyEmail: 'desiree61@kelly.com',
      country: 'Macedonia',
      contact: '(510) 536-6029',
      name: 'Nicholas Tanner',
    },
    service: 'Template Customization',
    total: 3851,
    avatar: avatar6,
    invoiceStatus: 'Paid',
    balance: 0,
    dueDate: `${ now.getFullYear() }-${ currentMonth }-25`,
  },
  {
    id: 5030,
    issuedDate: `${ now.getFullYear() }-${ currentMonth }-07`,
    client: {
      address: '3856 Mathis Squares Apt. 584',
      company: 'Byrd LLC PLC',
      companyEmail: 'jeffrey25@martinez-hodge.com',
      country: 'Congo',
      contact: '(253) 230-4657',
      name: 'Justin Richardson',
    },
    service: 'Template Customization',
    total: 5565,
    avatar: avatar7,
    invoiceStatus: 'Draft',
    balance: 0,
    dueDate: `${ now.getFullYear() }-${ currentMonth }-06`,
  },
  {
    id: 5031,
    issuedDate: `${ now.getFullYear() }-${ currentMonth }-21`,
    client: {
      address: '141 Adrian Ridge Suite 550',
      company: 'Stone-Zimmerman Group',
      companyEmail: 'john77@anderson.net',
      country: 'Falkland Islands (Malvinas)',
      contact: '(612) 546-3485',
      name: 'Jennifer Summers',
    },
    service: 'Template Customization',
    total: 3313,
    avatar: avatar8,
    invoiceStatus: 'Partial Payment',
    balance: 0,
    dueDate: `${ now.getFullYear() }-${ currentMonth }-09`,
  },
]

const headers = [
  {
    title: '#ID',
    key: 'id',
  },
  {
    title: 'Status',
    key: 'status',
    sortable: false,
  },
  {
    title: 'Client',
    key: 'client.name',
  },
  {
    title: 'Total',
    key: 'total',
  },
  {
    title: 'Balance',
    key: 'balance',
  },
]
</script>

<template>
  <VCard>
    <VDataTable
      :headers="headers"
      :items="invoices"
      class="text-no-wrap"
    >
      <!-- id -->
      <template #item.id="{ item }">
        <NuxtLink :to="{ name: 'apps-invoice-preview-id', params: { id: item.id } }">
          #{{ item.id }}
        </NuxtLink>
      </template>

      <!-- trending -->
      <template #item.status="{ item }">
        <VTooltip>
          <template #activator="{ props }">
            <VAvatar
              :size="28"
              v-bind="props"
              :color="resolveInvoiceStatusVariantAndIcon(item.invoiceStatus).variant"
              variant="tonal"
            >
              <VIcon
                :size="16"
                :icon="resolveInvoiceStatusVariantAndIcon(item.invoiceStatus).icon"
              />
            </VAvatar>
          </template>
          <p class="mb-0">
            {{ item.invoiceStatus }}
          </p>
          <p class="mb-0">
            Balance: {{ item.balance }}
          </p>
          <p class="mb-0">
            Due date: {{ item.dueDate }}
          </p>
        </VTooltip>
      </template>

      <!-- client -->
      <template #item.client.name="{ item }">
        <div class="d-flex align-center">
          <VAvatar
            size="34"
            :color="!item.avatar.length ? resolveInvoiceStatusVariantAndIcon(item.invoiceStatus).variant : undefined"
            :variant="!item.avatar.length ? 'tonal' : undefined"
            class="me-3"
          >
            <VImg
              v-if="item.avatar.length"
              :src="item.avatar"
            />
            <span v-else>{{ avatarText(item.client.name) }}</span>
          </VAvatar>
          <div class="d-flex flex-column">
            <NuxtLink
              :to="{ name: 'pages-user-profile-tab', params: { tab: 'profile' } }"
              class="text-h6 font-weight-medium mb-0"
            >
              {{ item.client.name }}
            </NuxtLink>
            <span class="text-body-2">{{ item.client.companyEmail }}</span>
          </div>
        </div>
      </template>

      <!-- Total -->
      <template #item.total="{ item }">
        ${{ item.total }}
      </template>

      <!-- Balance -->
      <template #item.balance="{ item }">
        <VChip
          v-if="typeof ((resolveInvoiceBalanceVariant(item.balance, item.total)).status) === 'string'"
          :color="resolveInvoiceBalanceVariant(item.balance, item.total).chip.color"
          size="small"
        >
          {{ (resolveInvoiceBalanceVariant(item.balance, item.total)).status }}
        </VChip>
        <h6
          v-else
          class="text-h6 font-weight-regular"
        >
          {{ Number((resolveInvoiceBalanceVariant(item.balance, item.total)).status) > 0 ? `$${(resolveInvoiceBalanceVariant(item.balance, item.total)).status}` : `-$${Math.abs(Number((resolveInvoiceBalanceVariant(item.balance, item.total)).status))}` }}
        </h6>
      </template>

      <template #bottom />
    </VDataTable>
  </VCard>
</template>
