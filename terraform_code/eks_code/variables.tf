variable "region" {
  description = "AWS region"
  type        = string
}

variable "azs" {
  description = "Availability Zones"
  type        = list(string)
}

variable "kubernetes_version" {
  description = "EKS Kubernetes Version"
  type        = string
  default     = "1.33"
}

variable "node_group_name" {
  description = "Name of the EKS Node Group"
  type        = string
  default     = "harshal-node"
}

variable "instance_types" {
  description = "List of instance types for EKS Node Group"
  type        = list(string)
  default     = ["t2.medium"]
}

variable "extra_tag" {
  description = "Extra tag value for EKS Node Group"
  type        = string
  default     = "harshal_Node"
}

variable "jenkins_admin_arn" {
  description = "IAM ARN of the Jenkins Server (or user) to grant Kubernetes admin access"
  type        = string
}
