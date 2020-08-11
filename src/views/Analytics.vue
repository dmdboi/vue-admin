<template>
  <div class="container px-10 mx-auto">
    <h3 class="text-gray-700 text-3xl mt-5 font-medium">Analytics</h3>

    <h4 class="text-gray-500 text-2xl mt-5 font-medium">Tickets</h4>
    <div class="flex flex-wrap -mx-4 -mb-4 md:mb-0">
      <div class="w-full md:w-full lg:w-1/2 mb-4 md:mb-0 my-3">
        <div class="rounded shadow bg-white mx-2">
          <h3 class="text-xl font-heading font-semibold py-4 mx-10">
            Open Tickets
          </h3>
          <apexchart
            class="mx-10"
            width="100%"
            type="bar"
            :options="barOptions"
            :series="series"
          ></apexchart>
        </div>
      </div>

      <div class="w-full md:w-full lg:w-1/2 mb-4 md:mb-0 my-3">
        <div class="rounded shadow bg-white mx-2">
          <h3 class="text-xl font-heading font-semibold py-4 mx-10">
            Ticket Categories
          </h3>
          <apexchart
            class="mx-10 py-2"
            width="80%"
            type="pie"
            :options="pieOptions"
            :series="pieSeries"
          ></apexchart>
        </div>
      </div>
    </div>

    <h4 class="text-gray-500 text-2xl mt-5 font-medium">Sessions</h4>
    <div class="flex flex-wrap -mx-8 my-3">
      <div class="w-1/2 md:w-1/6 px-8 mb-4 md:mb-0">
        <div class="shadow rounded bg-white py-2  w-48">
          <h3 class="text-gray-700 text-3xl mt-5 font-medium text-center">
            12,696
          </h3>
          <p class="text-center pb-4">Sessions</p>
        </div>
      </div>
      <div class="w-1/2 md:w-1/6 px-8 mb-4 md:mb-0">
        <div class="shadow rounded bg-white py-2 w-48">
          <h3 class="text-gray-700 text-3xl mt-5 font-medium text-center">
            12,696
          </h3>
          <p class="text-center pb-4">Sessions</p>
        </div>
      </div>
      <div class="w-1/2 md:w-1/6 px-8 mb-4 md:mb-0">
        <div class="shadow rounded bg-white py-2 w-48">
          <h3 class="text-gray-700 text-3xl mt-5 font-medium text-center">
            12,696
          </h3>
          <p class="text-center pb-4">Sessions</p>
        </div>
      </div>
      <div class="w-1/2 md:w-1/6 px-8 mb-4 md:mb-0">
        <div class="shadow rounded bg-white py-2  w-48">
          <h3 class="text-gray-700 text-3xl mt-5 font-medium text-center">
            12,696
          </h3>
          <p class="text-center pb-4">Sessions</p>
        </div>
      </div>
      <div class="w-1/2 md:w-1/6 px-8 mb-4 md:mb-0">
        <div class="shadow rounded bg-white py-2  w-48">
          <h3 class="text-gray-700 text-3xl mt-5 font-medium text-center">
            12,696
          </h3>
          <p class="text-center pb-4">Sessions</p>
        </div>
      </div>
      <div class="w-1/2 md:w-1/6 px-8 mb-4 md:mb-0">
        <div class="shadow rounded bg-white py-2  w-48">
          <h3 class="text-gray-700 text-3xl mt-5 font-medium text-center">
            12,696
          </h3>
          <p class="text-center pb-4">Sessions</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Analytics",
  data() {
    return {
      barOptions: {
        chart: {
          id: "Open Tickets",
        },
        xaxis: {
          categories: ["11/08", "12/08", "13/08", "14/08", "15/08", "16/08"],
        },
        responsive: [
          {
            breakpoint: 596,
            options: {
              chart: {
                width: "100%",
              },
            },
          },
        ],
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 35, 50, 67, 41, 50, 45],
        },
      ],
      pieOptions: {
        chart: {
          id: "Ticket Type",
        },

        labels: ["Billing", "Technical", "Account", "Pre-sale"],
        responsive: [
          {
            breakpoint: 596,
            options: {
              chart: {
                width: "100%",
              },
            },
          },
        ],
      },
      pieSeries: [44, 55, 13, 33],
    };
  },
};
</script>
