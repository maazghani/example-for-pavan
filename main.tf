provider "aws" {
  region = "us-west-2"
}

resource "aws_eks_cluster" "my_cluster" {
  name = "my-cluster"
  version = "1.17"
  role_arn = "arn:aws:iam::123456789012:role/eks-cluster-role"

  v0c_config {
    subnet_ids = ["subnet-ab123cd", "subnet-de456ef"]
  }
}

resource "aws_eks_node_group" "my_node_group" {
  cluster_name = aws_eks_cluster.my_cluster.name
  node_group_name = "my-node-group"
  node_role_arn = "arn:aws:iam::123456789012:role/eks-node-group-role"
  subnet_ids = ["subnet-ab123cd", "subnet-de456ef"]

  scaling_config {
    desired_size = 3 
    min_size = 1
    max_size = 5
  }
}