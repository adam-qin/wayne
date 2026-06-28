export const defaultAutoscale = `{
  "apiVersion": "autoscaling/v1",
  "kind": "HorizontalPodAutoscaler",
  "metadata": {
    "name": ""
  },
  "spec": {
    "maxReplicas": 3,
    "minReplicas": 1,
    "scaleTargetRef": {
        "apiVersion": "apps/v1",
        "kind": "Deployment",
        "name": ""
    },
    "targetCPUUtilizationPercentage": 80
  }
}`;
