<script setup lang="ts">
import cardMeetup from '@images/cards/meetup-img.png'

const developerMeetup = [
  { icon: 'ri-time-line', title: 'Tuesday, 24 january, 10:20 - 12:30', subtitle: 'After 1 week' },
  { icon: 'ri-map-pin-line', title: 'The Richard NYC', subtitle: '1305 Lexington Ave, New York' },
]
</script>

<template>
  <VCard>
    <VImg
      cover
      :height="160"
      :src="cardMeetup"
    />

    <VCardText>
      <div class="d-flex align-center pb-4">
        <div class="me-4">
          <VAvatar
            rounded
            size="58"
            color="primary"
            variant="tonal"
          >
            <div class="py-2">
              <div class="text-body-1 text-primary">
                Jan
              </div>
              <h5 class="text-h5 text-primary">
                24
              </h5>
            </div>
          </VAvatar>
        </div>

        <div>
          <h6 class="text-h6 mb-1">
            Developer Meetup
          </h6>
          <div class="text-body-2">
            The WordPress open source,free software project is the community behind the…
          </div>
        </div>
      </div>

      <VDivider />

      <div class="d-flex justify-space-between align-center my-4">
        <div class="text-center">
          <VIcon
            size="24"
            icon="ri-star-smile-line"
          />
          <div class="text-body-1">
            Interested
          </div>
        </div>

        <div class="text-center">
          <VIcon
            size="24"
            icon="ri-check-double-line"
          />
          <div class="text-body-1">
            Joined
          </div>
        </div>

        <div class="text-center">
          <VIcon
            size="24"
            icon="ri-group-line"
            color="primary"
          />
          <div class="text-body-1 text-primary">
            Invited
          </div>
        </div>

        <div class="text-center">
          <div class="mb-1">
            <VIcon
              size="24"
              icon="ri-more-line"
            />
          </div>
          <span class="text-xs text-no-wrap">
            More
          </span>
        </div>
      </div>

      <VDivider class="mb-4" />

      <div
        v-for="(meetup, index) in developerMeetup"
        :key="meetup.icon"
        class="d-flex align-start gap-x-2"
        :class="index !== developerMeetup.length - 1 ? 'mb-2' : ''"
      >
        <VIcon
          :icon="meetup.icon"
          size="20"
        />
        <div>
          <div>{{ meetup.title }}</div>
          <div>{{ meetup.subtitle }}</div>
        </div>
      </div>
    </VCardText>
  </VCard>
</template>

<style lang="scss">
.text-two-line-ellipsis {
  /* stylelint-disable-next-line value-no-vendor-prefix */
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
}
</style>
