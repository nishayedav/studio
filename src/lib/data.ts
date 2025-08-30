import { Cloud, Database, Server, Code, Layers, ShieldCheck, CloudCog } from 'lucide-react';

export const skills = [
  { name: 'Amazon Web Services (AWS)', icon: Cloud },
  { name: 'Microsoft Azure', icon: Cloud },
  { name: 'Google Cloud Platform (GCP)', icon: Cloud },
  { name: 'Docker & Kubernetes', icon: Server },
  { name: 'Terraform & IaC', icon: Code },
  { name: 'CI/CD Pipelines', icon: Layers },
  { name: 'Python & Bash Scripting', icon: Code },
  { name: 'PostgreSQL & MySQL', icon: Database },
];

export const services = [
  {
    icon: CloudCog,
    title: 'Cloud Architecture',
    description: 'Designing scalable, secure, and cost-effective cloud infrastructures tailored to your business needs.',
  },
  {
    icon: Layers,
    title: 'DevOps & Automation',
    description: 'Implementing CI/CD pipelines and automation to accelerate development cycles and improve reliability.',
  },
  {
    icon: ShieldCheck,
    title: 'IAM Security & Compliance',
    description: 'Ensuring your cloud environment adheres to industry best practices and compliance standards.',
  },
];

export const testimonials = [
  {
    name: 'John Doe',
    title: 'CEO, Tech Innovators',
    image: 'https://picsum.photos/100/100?random=1',
    dataAiHint: 'man portrait',
    quote: "Nisha's expertise in cloud architecture was instrumental in our platform's success. Her solutions are both elegant and robust.",
  },
  {
    name: 'Jane Smith',
    title: 'CTO, Startup Hub',
    image: 'https://picsum.photos/100/100?random=2',
    dataAiHint: 'woman portrait',
    quote: 'The DevOps pipeline she implemented increased our deployment frequency by 300%. A true professional and a pleasure to work with.',
  },
  {
    name: 'Samuel Lee',
    title: 'Project Manager, Global Corp',
    image: 'https://picsum.photos/100/100?random=3',
    dataAiHint: 'man professional',
    quote: 'Her deep understanding of cloud security gave us the confidence to migrate our critical workloads. Highly recommended.',
  },
];

export const blogPosts = [
  {
    slug: 'demystifying-kubernetes',
    title: 'Demystifying Kubernetes for Beginners',
    date: '2024-07-15',
    summary: 'A comprehensive guide to understanding the core concepts of Kubernetes and getting started with your first cluster.',
    image: 'https://picsum.photos/600/400?random=4',
    dataAiHint: 'server technology',
    content: `Kubernetes, often abbreviated as K8s, is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. It was originally designed by Google and is now maintained by the Cloud Native Computing Foundation.

At its core, Kubernetes helps you manage containers, which are lightweight, portable, and self-sufficient units that package an application along with all its dependencies. This ensures that the application runs consistently across different environments.

Key concepts in Kubernetes include:
- **Pods:** The smallest deployable units in Kubernetes. A Pod can contain one or more containers.
- **Services:** An abstraction that defines a logical set of Pods and a policy by which to access them.
- **Deployments:** A resource object in Kubernetes that provides declarative updates to Pods and ReplicaSets.
- **Nodes:** A worker machine in Kubernetes, which can be either a virtual or a physical machine.

Getting started with Kubernetes can seem daunting, but tools like Minikube and Kind make it easy to set up a local cluster for learning and development. By understanding these fundamental building blocks, you can begin to harness the power of Kubernetes to build resilient and scalable applications.`
  },
  {
    slug: 'serverless-on-aws',
    title: 'The Power of Serverless on AWS with Lambda',
    date: '2024-06-28',
    summary: 'Explore the benefits of serverless computing and how AWS Lambda can help you build cost-efficient, event-driven applications.',
    image: 'https://picsum.photos/600/400?random=5',
    dataAiHint: 'cloud abstract',
    content: `Serverless computing allows you to build and run applications and services without thinking about servers. With serverless, your application still runs on servers, but all the server management is done by the cloud provider.

AWS Lambda is a prime example of a serverless compute service. It lets you run code in response to events, and it automatically manages the underlying compute resources for you.

Why go serverless with Lambda?
- **No Server Management:** You don't have to provision or manage any servers.
- **Pay-per-use:** You are charged only for the compute time you consume, down to the millisecond.
- **Automatic Scaling:** AWS Lambda automatically scales your application by running code in response to each trigger.
- **Event-driven:** Lambda functions can be triggered by a wide variety of AWS services like S3, DynamoDB, API Gateway, and more.

A common use case is building a serverless API. You can use Amazon API Gateway to create an HTTP endpoint and have it trigger a Lambda function to process the request. This architecture is incredibly scalable and cost-effective for many types of applications, from simple web APIs to complex data processing pipelines.`
  },
  {
    slug: 'infrastructure-as-code-with-terraform',
    title: 'Infrastructure as Code: A Practical Intro to Terraform',
    date: '2024-05-20',
    summary: 'Learn what Infrastructure as Code (IaC) is and how to use Terraform to provision and manage your cloud resources declaratively.',
    image: 'https://picsum.photos/600/400?random=6',
    dataAiHint: 'code abstract',
    content: `Infrastructure as Code (IaC) is the process of managing and provisioning computer data centers through machine-readable definition files, rather than physical hardware configuration or interactive configuration tools.

Terraform, by HashiCorp, is one of the most popular IaC tools available today. It allows you to define your infrastructure in a high-level configuration language called HCL (HashiCorp Configuration Language).

The core workflow in Terraform consists of three stages:
1.  **Write:** You define resources in configuration files. These can be anything from a virtual machine to a DNS record.
2.  **Plan:** Terraform creates an execution plan describing what it will do to reach your desired state. This lets you preview changes before applying them.
3.  **Apply:** On approval, Terraform performs the proposed operations in the correct order, respecting any resource dependencies.

Using Terraform provides numerous benefits, including version control for your infrastructure, reusability of configuration, and a consistent workflow for managing multiple cloud providers. It's an essential tool for any modern cloud engineer looking to automate and streamline their infrastructure management.`
  },
];
