module "eks" {
  source  = "terraform-aws-modules/eks/aws"
  version = "~> 21.0"

  name                           = local.name
  kubernetes_version             = var.kubernetes_version
  endpoint_public_access         = true

  addons = {
    coredns = {
      most_recent = true
    }
    kube-proxy = {
      most_recent = true
    }
    vpc-cni = {
      most_recent = true
      before_compute = true
    }
  }

  enable_cluster_creator_admin_permissions = true

  access_entries = var.jenkins_admin_arn != data.aws_caller_identity.current.arn ? {
    jenkins_admin = {
      principal_arn = var.jenkins_admin_arn
      policy_associations = {
        admin = {
          policy_arn = "arn:aws:eks::aws:cluster-access-policy/AmazonEKSClusterAdminPolicy"
          access_scope = {
            type = "cluster"
          }
        }
      }
    }
  } : {}

  vpc_id                   = module.vpc.vpc_id
  subnet_ids               = module.vpc.private_subnets

  eks_managed_node_groups = {
    (var.node_group_name) = {
      min_size     = 2
      max_size     = 4
      desired_size = 2

      instance_types = var.instance_types
      capacity_type  = "SPOT"

      tags = {
        ExtraTag = var.extra_tag
      }
    }
  }

  tags = local.tags
}
