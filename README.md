# 🌐 2Rescue: Disaster Relief Web App

2Rescue is a dynamic, cloud-hosted web application built with React, designed to provide fast and accessible disaster relief resources for communities in the UK.

**Live Site:** [https://rescue-6250b.web.app/](https://rescue-6250b.web.app/)

<img width="1918" height="876" alt="image" src="https://github.com/user-attachments/assets/ce4e676f-2ba3-495c-abcc-a3c7001d55c0" />

---

## 🚀 Purpose

During emergencies, access to accurate and timely information can save lives. 2Rescue is a proof-of-concept application that helps individuals:

* **View Live Weather & Alerts:** Fetches and displays a 5-day weather forecast and real-time UK disaster alerts from a live API.
* **Request Assistance:** Submit a help request form with user details directly to a cloud database.
* **Find Help & Resources:** Access a curated list of national charities and official UK guidance for crisis situations.
* **Access Emergency Contacts:** Quickly find a static list of critical UK emergency numbers.

---

## 🔧 Tech Stack & Cloud Integration

This project was built using a modern, serverless architecture, emphasizing cloud technologies.

| Category               | Tool / Technology                                                               |
| ---------------------- | ------------------------------------------------------------------------------- |
| **Frontend** | React, Vite, JavaScript (ES6+), CSS3                                            |
| **Backend (BaaS)** | **Firebase:** Cloud Firestore for the database                                  |
| **Live Data** | **WeatherAPI.com:** Forecast & Alerts API                                       |
| **Deployment & CI/CD** | **Firebase Hosting** with **GitHub Actions** for automated builds and deployments |
| **Version Control** | Git & GitHub                                                                    |

The application leverages **Firebase's Cloud Firestore** to provide a serverless database, allowing for real-time data submission without managing a traditional backend server. The entire frontend is deployed on **Firebase Hosting**, using a **GitHub Actions** workflow for Continuous Integration and Continuous Deployment (CI/CD), automatically deploying new changes on every push to the main branch.

---

## 🔑 Key Features

* **Dynamic Weather & Alerts Page:** The alerts page is powered by the WeatherAPI.com Forecast API. It displays a 5-day weather forecast for London and shows any active national disaster alerts if they are present in the API response.
* **Cloud-Connected Request Form:** The "Request Help" form uses controlled components in React. On submission, the data is sent to a `requests` collection in a Cloud Firestore database, including a server timestamp.
* **Dynamic Homepage Banner:** The homepage features a banner that only appears if the live API is reporting active disaster alerts, providing immediate notice of critical events.
* **Responsive UI:** Styled with pure CSS and a Flexbox-based layout for a clean and responsive experience on both desktop and mobile devices.

```
