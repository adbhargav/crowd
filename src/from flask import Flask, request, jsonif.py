from flask import Flask, request, jsonify
from datetime import datetime

app = Flask(_name_)

# Temporary storage (in-memory)
polls = []

@app.route('/create_poll', methods=['POST'])
def create_poll():
    data = request.json
    question = data.get('question')
    options = data.get('options')
    start_time = data.get('start_time')
    end_time = data.get('end_time')

    # Validate
    if not question or not options or len(options) < 2:
        return jsonify({"message": "Invalid poll data"}), 400

    # Create poll object
    poll = {
        "id": len(polls) + 1,
        "question": question,
        "options": options,
        "votes": {opt: 0 for opt in options},
        "start_time": start_time,
        "end_time": end_time,
        "status": "Scheduled"
    }

    polls.append(poll)
    return jsonify({"message": "Poll created successfully", "poll": poll})

# Run the app
if _name_ == '_main_':
    app.run(debug=True)