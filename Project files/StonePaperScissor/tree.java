import java.util.Scanner;

class TreeNode {
    int data;
    TreeNode left, right;

    public TreeNode(int item) {
        data = item;
        left = right = null;
    }
}

public class tree {
    TreeNode root;

    public tree() {
        root = null;
    }

    public void insert(int data) {
        root = insertRec(root, data);
    }

    private TreeNode insertRec(TreeNode root, int data) {
        if (root == null) {
            root = new TreeNode(data);
            return root;
        }

        if (data < root.data) {
            root.left = insertRec(root.left, data);
        } else if (data > root.data) {
            root.right = insertRec(root.right, data);
        }

        return root;
    }

    public void printInOrder() {
        printInOrderRec(root);
    }

    private void printInOrderRec(TreeNode root) {
        if (root != null) {
            printInOrderRec(root.left);
            System.out.print(root.data + " ");
            printInOrderRec(root.right);
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
       tree binaryTree = new tree();

        System.out.println("Enter elements to insert into the binary tree (enter -1 to stop):");

        int input;
        while ((input = scanner.nextInt()) != -1) {
            binaryTree.insert(input);
        }

        System.out.println("In-order traversal of the binary tree:");
        binaryTree.printInOrder();
    }
}
