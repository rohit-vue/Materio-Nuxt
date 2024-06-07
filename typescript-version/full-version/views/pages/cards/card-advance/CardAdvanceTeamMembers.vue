<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar8 from '@images/avatars/avatar-8.png'

const teamMembers = [
  {
    profilePic: avatar1,
    name: 'Dean Hogan',
    designation: 'IOS developer',
    project: 'Zipper',
    projectIndication: 'primary',
    task: '87/135',
    progress: 65,

  },
  {
    profilePic: avatar8,
    name: 'Hilda Rice',
    designation: 'Laravel developer',
    project: 'Brandi',
    projectIndication: 'success',
    task: '340/420',
    progress: 75,
  },
  {
    profilePic: avatar5,
    name: 'Andrew O\'Brien',
    designation: 'React developer',
    project: 'Payers',
    projectIndication: 'warning',
    task: '50/82',
    progress: 55,
  },
  {
    profilePic: avatar2,
    name: 'Eleanor Price',
    designation: 'Angular developer',
    project: 'Citibank',
    projectIndication: 'error',
    task: '98/260',
    progress: 60,
  },
  {
    profilePic: avatar3,
    name: 'Carl Oliver',
    designation: 'VueJs developer',
    project: 'Aviator',
    projectIndication: 'secondary',
    task: '12/25',
    progress: 60,
  },
]
</script>

<template>
  <VCard>
    <!-- SECTION Card Header and Menu -->
    <VCardItem>
      <!-- 👉 Title -->
      <VCardTitle>Team Members</VCardTitle>

      <!-- 👉 menu -->
      <template #append>
        <div class="me-n3">
          <MoreBtn />
        </div>
      </template>
    </VCardItem>
    <!-- !SECTION -->

    <!-- TODO try to remove table border -->
    <VTable class="text-no-wrap team-members-table">
      <thead>
        <tr>
          <th scope="col">
            Name
          </th>
          <th scope="col">
            Project
          </th>
          <th scope="col">
            Tasks
          </th>
          <th scope="col">
            Progress
          </th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="member in teamMembers"
          :key="member.name"
        >
          <td>
            <div class="d-flex align-center">
              <div class="me-3">
                <VAvatar
                  size="38"
                  :image="member.profilePic"
                />
              </div>
              <div>
                <h6 class="text-h6">
                  {{ member.name }}
                </h6>
                <div class="text-body-1">
                  {{ member.designation }}
                </div>
              </div>
            </div>
          </td>

          <td>
            <VChip
              :color="member.projectIndication"
              size="small"
            >
              {{ member.project }}
            </VChip>
          </td>

          <td>
            <div class="d-flex font-weight-medium">
              <div class="text-primary">
                {{ member.task.split('/')[0] }}
              </div>
              <div class="text-primary">
                /
              </div>
              <h6 class="text-h6 text-medium-emphasis">
                {{ member.task.split('/')[1] }}
              </h6>
            </div>
          </td>

          <td class="text-center">
            <VProgressCircular
              :color="member.projectIndication"
              :model-value="member.progress"
            />
          </td>
        </tr>
      </tbody>
    </VTable>
  </VCard>
</template>

<style lang="scss">
.team-members-table {
  &.v-table{
    --v-table-header-height: 2rem;

    .v-table__wrapper{
      table{
        thead{
          tr{
            th{
              background: none !important;
              border-block-end: 1px solid rgba(var(--v-border-color), var(--v-border-opacity)) !important;
              margin-block-end: 0.75rem !important;

              &:first-child{
                padding-inline-start: 1.25rem;
              }

              &:last-child{
                padding-inline-end: 1.25rem;
              }
            }
          }
        }

        tbody{
          tr{
            td{
              padding-block: 0.5rem;
              padding-inline: 1rem;

              &:first-child{
                padding-inline-start: 1.25rem;
              }

              &:last-child{
                padding-inline-end: 1.25rem;
              }
            }

            &:not(:last-child){
              td{
                border-block-end: none ;
              }
            }

            &:last-child{
              td{
                padding-block-end: 1.25rem;
              }
            }

            &:first-child{
              td{
                padding-block-start: 1.25rem;
              }
            }
          }
        }

      }
    }
  }
}
</style>
