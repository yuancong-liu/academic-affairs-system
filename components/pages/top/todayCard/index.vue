<template>
  <Container>
    <div class="flex flex-col gap-6">
      <h2 class="text-2xl font-semibold">TODAY</h2>

      <div class="flex items-center justify-between">
        <div class="flex flex-col">
          <span>1st week</span>
          <span class="text-xl font-semibold">3 JAN 2024</span>
          <span>FRI</span>
        </div>
        <div class="w-20 self-stretch bg-gray-400"></div>
        <div class="flex flex-col">
          <span>Cloudy</span>
          <span class="text-xl font-semibold">-3°C</span>
        </div>
      </div>

      <ul class="flex flex-col gap-4">
        <li
          v-for="classInfo in MOCK"
          :key="classInfo.startAt"
          class="grid grid-cols-[20px_3fr_2fr] items-center justify-between"
        >
          <div
            class="flex h-full flex-col justify-between font-bold text-slate-300"
          >
            <span>{{ classInfo.startAt }}</span>
            <span>{{ classInfo.endAt }}</span>
          </div>
          <div class="flex flex-col">
            <span>{{ classInfo.teacher }}</span>
            <span
              class="w-fit text-xl font-bold"
              :class="
                currentOffset >= classInfo.startAt &&
                currentOffset <= classInfo.endAt &&
                tw`relative z-[1] after:absolute after:bottom-0 after:left-2 after:z-[-1] after:h-3 after:w-full after:rounded-full after:bg-blue-400 after:shadow-lg after:shadow-blue-400 after:content-['']`
              "
              >{{ classInfo.subject }}</span
            >
            <span>{{ classInfo.room }}</span>
          </div>
          <div
            v-if="classInfo.more"
            class="flex flex-col border-l border-solid border-slate-300 pl-8 text-end text-slate-500"
          >
            <span>{{ classInfo.more }}</span>
          </div>
        </li>
      </ul>

      <div class="flex justify-end">
        <Button>ALL CLASSES</Button>
      </div>
    </div>
  </Container>
</template>

<script lang="ts" setup>
type ClassInfo = {
  teacher: string;
  subject: string;
  startAt: number;
  endAt: number;
  room: string;
  more?: string;
};

const MOCK: ClassInfo[] = [
  {
    teacher: "Mr. Smith",
    subject: "Calculus",
    startAt: 1,
    endAt: 2,
    room: "A-101",
    more: "Midterm Exam",
  },
  {
    teacher: "Mr. Smith",
    subject: "Computer Organizations",
    startAt: 3,
    endAt: 4,
    room: "A-101",
    more: "Midterm Exam",
  },
  {
    teacher: "Mr. Smith",
    subject: "Grammars",
    startAt: 5,
    endAt: 6,
    room: "A-101",
    more: "Homework Due",
  },
  {
    teacher: "Mr. Smith",
    subject: "Calculus",
    startAt: 7,
    endAt: 8,
    room: "A-101",
  },
];

const currentOffset = new Date().getHours() - 4;
</script>
