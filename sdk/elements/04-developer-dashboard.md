---
title: Developer Dashboard
slug: /elements/developer-dashboard
sidebar_label: Developer Dashboard
hide_table_of_contents: false
---
<intro-end />

![Developer Dashboard](/img/sdk/dev-dashboard.png)

The Euclid Developer Dashboard is a tool crafted specifically for developers working with the Constellation ecosystem. The dashboard presents a unified view of the status of local and deployed clusters, allowing developers to easily monitor their projects' progress and the flow of data between network layers. 

Engineered to seamlessly integrate with the Euclid Development Environment, the dashboard serves as an excellent starting point for constructing bespoke developer tools tailored to the unique requirements of your project. Developed using NextJS and Tailwind CSS, the codebase promotes rapid development, ensuring a smooth and efficient workflow for developers. Regardless of whether you're working on a small-scale project or building a sophisticated application, this dashboard helps you stay informed about your project's status while also laying the groundwork for the creation of additional tools designed to optimize your development process.

## Setup

Clone the project from Github

```tsx
git clone https://github.com/Constellation-Labs/sdk-developer-dashboard.git
cd sdk-developer-dashboard
```

Install dependencies

```tsx
npm install
```

Run the project

```tsx
npm run dev
```

Open a browser and navigate to 

```tsx
http://localhost:8080
```

## Configuration

The `.env` file in the root of the project contains defaults that work with the Euclid Development Environment out of the box but you can edit the defaults to match your desired configuration.

```tsx
L0_GLOBAL_URL=http://localhost:9000
L0_CURRENCY_URL=http://localhost:9200
L1_CURRENCY_URL=http://localhost:9300
```
