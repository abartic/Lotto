# Lotto

1. UI (Angular Material). User can generate lotto tickets. User can activate/de-activate create ticket panel from top menu. Draw ticket generates a new ticket (ticket is generated on back end and persisted). The new ticket is presented   in a dialog. Ticket list is automatically updated
   
2. Back end. Data about tickets is persisted in memory. The repository can be easily extended to use a db. Boxes of tickets are generated in parallel for performance optimizations. Also, numbers are generated in a way which guaranty a more randomness
