#include <iostream>
#include <vector>
#include <queue>
using namespace std;

int solve(vector<int>& err, int p, int q) {
    priority_queue<int> maxHeap(err.begin(), err.end());
    int operations = 0;
    
    while (!maxHeap.empty() && maxHeap.top() > 0) {
        int max_err = maxHeap.top();
        maxHeap.pop();
        
        max_err -= p;
        if (max_err < 0) max_err = 0;
        
        vector<int> tempHeap;
        while (!maxHeap.empty()) {
            int other_err = maxHeap.top();
            maxHeap.pop();
            other_err -= q;
            if (other_err < 0) other_err = 0;
            tempHeap.push_back(other_err);
        }
        
        if (max_err > 0) {
            tempHeap.push_back(max_err);
        }
        
        for (int err_score : tempHeap) {
            if (err_score > 0) {
                maxHeap.push(err_score);
            }
        }
        
        operations += 1;
    }
    
    return operations;
}

int main() {
    int errorScore_size;
    cin >> errorScore_size;
    vector<int> errorScores(errorScore_size);
    for (int i = 0; i < errorScore_size; ++i) {
        cin >> errorScores[i];
    }
    int P, Q;
    cin >> P >> Q;
    
    cout << solve(errorScores, P, Q) << endl;  // Output the number of operations
    return 0;
}