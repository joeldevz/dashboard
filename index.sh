#!/bin/bash
EXCLUDE_NAMESPACE='-e amazon -e kube '
NAMESPACES=$(kubectl get namespace | tail -n +2 | grep -wv $EXCLUDE_NAMESPACE | awk '{print $1}') #"production staging ariadne-staging"
ACTIONS="port-forward describe exec change exit"
ACTIONSDEPLOYMENT="describe rollout change exit"
env=""
TYPES="deployment cronjob pods"
NAMESPACES="$NAMESPACES "
printWelcome() {
	clear
	echo -e "\n\e[94m---------------------------------------------------------\e[0m"
	echo -e "\e[94m--------------------KUBERNETES SIMPLE--------------------\e[0m"
	echo -e "\e[94m------------------------by UMIBU-------------------------\e[0m \n"
	[[ -n "$env" ]] && echo -e "\e[36mselected namespace\e[0m: "$env
	[[ -n "$type" ]] && echo -e "\e[36mselected type\e[0m: "$type
	[[ -n "$pod" ]] && echo -e "\e[36mselected pod\e[0m: "$pod
	[[ -n "$deployment" ]] && echo -e "\e[36mselected deployment\e[0m: "$deployment
	[[ -n "$env" ]] || [[ -n "$pod" ]] && echo -e "\n"
}
actionPods() {

	return false
}
printSelect() {
	echo -e "\e[36m$1 \e[0m"
	echo -e "\e[90mif you don't see the data press enter \e[0m"
}
selectedPods() {
	Rpods=$(kubectl get pods -n $env | tail -n +2 | awk '{print $1}')
	printWelcome ""
	printSelect "select Pods: "
	select pod in $Rpods; do
		printWelcome ""
		printSelect "Select Action: "
		select action in $ACTIONS; do
			printWelcome ""
			case $action in
			port-forward)
				echo -e "\e[36mkubectl port-forward $pod 54321:5432 --namespace $env\e[0m"
				kubectl port-forward $pod 54321:5432 --namespace $env
				;;
			change-pods)
				printSelect "select Pods:"
				break
				;;
			exec)
				echo -e "\e[36mkubectl exec -it $pod --namespace $env -- sh \e[0m"
				kubectl exec -it $pod --namespace $env -- sh
				printSelect "Select Action: "
				;;
			exit)
				exit
				;;
			*)
				printSelect "Select Action: "
				;;

			esac
		done
	done
}
selectedDEployment() {
	Rdeployments=$(kubectl get deployment -n $env | tail -n +2 | awk '{print $1}')
	printWelcome ""
	printSelect "select Deployment: "
	select deployment in $Rdeployments; do
		printWelcome ""
		printSelect "Select Action: "
		select action in $ACTIONSDEPLOYMENT; do
			printWelcome ""
			case $action in
			describe)
				echo -e "\e[36mkubectl describe deployment $deployment  --namespace $env\e[0m"
				kubectl describe deployment $deployment --namespace $env
				printSelect "Select Action: "
				;;
			rollout)
				echo -e "\e[36mkubectl rollout restart deployment $deployment  --namespace $env\e[0m"
				kubectl rollout restart deployment $deployment --namespace $env
				printSelect "Select Action: "
				;;
			change)
				printSelect "select deployment:"
				break
				;;
			exit)
				exit
				;;
			*)
				printSelect "Select Action: "
				;;

			esac
		done
	done
}
printWelcome ""

echo -e "\e[36mselect namespace: \e[0m"

select env in $NAMESPACES; do
	printWelcome ""
	printSelect "select Types: "
	select type in $TYPES; do
		case $type in
		pods)
			selectedPods ""
			;;
		deployment)
			selectedDEployment ""
			;;
		*)
			exit
			;;
		esac
	done
done
